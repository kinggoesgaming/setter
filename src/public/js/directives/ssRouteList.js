/*global angular: false, btoa: false, console: false, Chart: false, moment: false, $: false */

angular.module('SETTER')
    .directive('ssRouteList', [
        function () {
            'use strict';

            return {
                scope: {
                  'activeCategory': '=',
                  'category': '@',
                  'limit': '='
                },
                templateUrl: 'templates/directives/ssRouteList.tpl.html',
                replace: true,
                restrict: 'E',
                controller: function(
                  $scope,
                  $routeParams,
                  $rootScope,
                  SelectedRouteService,
                  GymsService
                ) {

                  var gymId = parseInt($routeParams.gymId, 10);
                  var that = this;
                  var MORE = "View More +";
                  var HIDE = "Hide Routes -";

                  $scope.gymId = gymId;
                  $scope.accountId = $rootScope.getAccountId();
                  $scope.step = $scope.limit;
                  $scope.initial = $scope.limit;
                  $scope.routes = [];
                  $scope.text = MORE;
                  $scope.hasData = false;

                  if ($scope.category === 'best') {
                    $scope.template = 'templates/gym/panels/activity/sections/BestRatedRoutes.tpl.html';
                    $scope.$watch('activeCategory', function() {
                        $scope.limit = $scope.initial;
                        $scope.text = MORE;

                         switch ($scope.activeCategory) {
                             case 'Bouldering':
                                 GymsService.getBestRatedBoulder(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             case 'Top Rope':
                                 GymsService.getBestRatedTopRope(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             case 'Lead':
                                 GymsService.getBestRatedLead(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             default:

                         }

                    });
                  } else {
                    $scope.template = 'templates/gym/panels/activity/sections/LatestRoutes.tpl.html';
                    $scope.$watch('activeCategory', function() {
                        $scope.limit = $scope.initial;
                        $scope.text = MORE;

                         switch ($scope.activeCategory) {
                             case 'Bouldering':
                                 GymsService.getNewestBoulder(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             case 'Top Rope':
                                 GymsService.getNewestTopRope(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             case 'Lead':
                                 GymsService.getNewestLead(gymId)
                                     .success(function (pData) {
                                         $scope.routes = pData;
                                         $scope.hasData = pData.length > 0;
                                     });
                                 break;
                             default:

                         }

                    });
                  }

                  this.getCategory = function () {
                    return $scope.category;
                  }

                  this.getActiveCategory = function () {
                    return $scope.activeCategory;
                  }

                  this.incrementLimitReached = function() {
                    return $scope.limit >= $scope.routes.length
                  };

                  this.refreshText = function () {
                    if (that.incrementLimitReached()) {
                      $scope.text = HIDE;
                    } else {
                      $scope.text = MORE;
                    }
                  };

                  $scope.hasLessThanLimit = function () {
                    return $scope.routes.length <= $scope.initial;
                  };

                  $scope.openRouteModal = function (route) {
                      $rootScope.openRouteModal(route)
                  };

                  $scope.placeholderClick = function () {
                    if ($rootScope.getAccountId() === gymId) {
                      $rootScope.navigateToWalls(gymId);
                    } else {
                      $rootScope.navigateToGymSuggestions(gymId);
                    }
                  }
                },
                link: function(scope, element, attrs, ctrl)  {
                  scope.clicked = function () {
                    if (!ctrl.incrementLimitReached()) {
                      scope.limit += scope.step;
                    } else {
                      scope.limit = scope.initial;
                    }
                    ctrl.refreshText();
                  }

                  scope.$watch('activeCategory', function () {
                    if (scope.activeCategory) {
                      scope.placeholderImage = 'images/placeholder--' + scope.category + scope.activeCategory.replace(' ', '') +'.jpg'
                    }

                    if (scope.accountId === scope.gymId) {
                      scope.placeholderTitle = "Oops! These aren't your newest lead routes.";
                      scope.placeholderText = "There aren't any here right now, but you can set new ones on the";
                      scope.placeholderLinkTest = " Manage Zones page";
                    } else {
                      scope.placeholderTitle = "Bummer, this gym has no " + scope.activeCategory + " yet.";
                      scope.placeholderText = "If you'd like to climb some, let them know over at their";
                      scope.placeholderLinkTest = " Suggestions board.";
                    }
                  });

                }
            };
        }]);
