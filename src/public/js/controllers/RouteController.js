/*jslint nomen: true */
/*jslint unparam: true*/
/*global angular: false, btoa: false, console: false, moment: false, confirm: false */

angular.module('SETTER')
    .controller('RouteController', [
        '$scope',
        '$rootScope',
        '$routeParams',
        '$q',
        'RoutesService',
        'CommentsService',
        'RatingsService',
        'SendsService',
        'WallsService',
        'LoginService',
        'GymsService',
        'ProjectsService',
        'SelectedRouteService',
        'MessageService',
        function (
            $scope,
            $rootScope,
            $routeParams,
            $q,
            RoutesService,
            CommentsService,
            RatingsService,
            SendsService,
            WallsService,
            LoginService,
            GymsService,
            ProjectsService,
            SelectedRouteService,
            MessageService
        ) {
            'use strict';

            $scope.newValue = 0;

            $scope.$watch(function () {
                return SelectedRouteService.getSelectedRoute();
            }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.routeId = newValue.id;
                    $scope.gymId = newValue.gym_id;
                    $scope.wallId = newValue.wall_id;
                    $scope.loading = true;
                    loadRouteData();

                    GymsService.getGymSettings($scope.gymId)
                      .success(function(pData){
                          $scope.settings = pData;
                      });
                }
            });

            $scope.form = {};
            $scope.stars = [];
            $scope.comments = [];

            var i;

            (function createStars() {
                for (i = 0; i < 5; i += 1) {
                    $scope.stars.push({
                        rating: i + 0.5
                    });
                }
            }());

            var loadRating = function () {
              return RatingsService.getRatingForRoute($scope.routeId)
                .success(function (pData) {
                    $scope.rating = Math.round(pData.rating * 10) / 10;
                    $scope.ratingCount = pData.count;

                    $rootScope.routeRated = [$scope.routeId, $scope.rating]
                });
            };

            var loadRouteData = function () {
                var a =  RoutesService.setRouteAsViewed($scope.routeId)
                    .success(function (pData) {
                        WallsService.setWallsDirty($scope.gymId);
                        RoutesService.setRoutesDirty($scope.gymId, $scope.wallId);
                    });

                var b = RoutesService.getRoute($scope.routeId)
                    .success(function (pData) {
                        pData.date = pData.date;
                        $scope.route = pData;
                    });

                var c = CommentsService.getCommentsAboutRoute($scope.routeId)
                    .success(function (pData) {
                        $scope.comments = pData;
                        for (i = 0; i < pData.length; i += 1) {
                            pData[i].date = pData[i].date;
                        }
                    });


                var d = loadRating()

                var e = RatingsService.hasRated($scope.routeId)
                    .success(function (pData) {
                        if (pData.error) {
                            $scope.hasRated = false;
                        } else {
                            $scope.hasRated = true;
                        }
                    });

                var f = SendsService.getSendsForRoute($scope.routeId)
                    .success(function (pData) {
                        $scope.sends = pData;
                    });

                var g = SendsService.hasSent($scope.routeId)
                    .success(function (pData) {
                        if (pData.error) {
                            $scope.hasSent = false;
                        } else {
                            $scope.hasSent = true;
                        }
                    });

                var h = ProjectsService.isProject($scope.routeId)
                    .success(function (pData) {
                        if (pData.error) {
                            $scope.isProject = false;
                        } else {
                            $scope.isProject = true;
                        }
                    });

                var i = ProjectsService.getProjectsForRoute($scope.routeId)
                    .success(function (pData) {
                        $scope.projects = pData;
                    });

                $q.all([a, b, c, d, e, f, g, h, i]).then(function() {
                    $scope.loading = false;
                    $scope.route.sent = $scope.hasSent;
                });
            }

            $scope.addComment = function () {
                CommentsService.createComment($scope.routeId, $scope.form.message)
                    .success(function (pData) {
                        $scope.comments.push({
                            id: pData.id,
                            account_id: $scope.getAccountId(),
                            message: $scope.form.message,
                            date: moment(),
                            url: LoginService.getImageUrl(),
                            name: LoginService.getName()
                        });
                        $scope.form.message = "";
                    });
            };

            $scope.hasComments = function() {
                return $scope.comments.length > 0;
            };


            $scope.send = function () {

                angular.element(".modal").foundation('reveal', 'open');

                SendsService.createSend($scope.routeId)
                    .success(function () {
                        MessageService.send('routeSent', $scope.route);
                        $scope.hasSent = true;
                        $rootScope.sendRoute = $scope.routeId;

                        $scope.sends.push({
                            account_id: $scope.getAccountId(),
                            name: LoginService.getName(),
                            route_id: parseInt($scope.routeId, 10),
                            url: LoginService.getImageUrl()
                        });
                    });
            };

            $scope.unsend = function () {
                SendsService.deleteSend($scope.routeId)
                    .success(function () {
                        var accountId;
                        MessageService.send('routeUnsent', $scope.route);

                        accountId = $scope.getAccountId();

                        for (i = 0; i < $scope.sends.length; i += 1) {
                            if ($scope.sends[i].account_id === accountId) {
                                $scope.sends.splice(i, 1);
                                break;
                            }
                        }

                        $scope.hasSent = false;
                        $rootScope.unsendRoute = $scope.routeId;
                    });
            };

            $scope.setHoverRating = function (pStar) {
                $scope.hoverRating = pStar.rating;
            };

            $scope.rate = function (pStar) {
                RatingsService.updateRating($scope.routeId, pStar.rating)
                    .success(function () {
                        $scope.hasRated = true;
                        angular.element(".modal").foundation('reveal', 'close');

                        loadRating();
                    });
            };

            $scope.closeModal = function () {
                angular.element(".modal").foundation('reveal', 'close');
            };

            $scope.isFilled = function (pStar) {
                if (pStar.rating <= $scope.hoverRating ||
                        pStar.rating <= $scope.rating) {
                    return true;
                }
                return false;
            };

            $scope.isHovered = function (pStar) {
                if (pStar.rating <= $scope.hoverRating) {
                    return true;
                }
                return false;
            };

            $scope.edit = function () {
                $rootScope.routeModalViewType = 'edit';
            };

            $scope.strip = function () {
                var yes = confirm("Are you sure you want to strip this route?");
                if (!yes) {
                    return;
                }

                RoutesService.stripRoute($scope.gymId, $scope.wallId, $scope.routeId)
                    .success(function (pData) {
                        $rootScope.closeRouteModal();
                        $rootScope.refreshWall = true;
                    });
            };

            $scope.topNavigationClicked = function () {
                if ($scope.pageWasBookmarked() || $scope.lastPageWasZone() || $scope.lastPageWasEditRoute()) {
                    $scope.navigateToWall($scope.gymId, $scope.wallId);
                } else {
                    $scope.back();
                }
            };

            $scope.setAsProject = function () {
                ProjectsService.createProject($scope.routeId)
                  .success(function (pData) {
                      $scope.isProject = true;
                      MessageService.send('projectSet', $scope.route);
                      $scope.projects.push({
                          url: LoginService.getImageUrl(),
                          name: LoginService.getName()
                      });
                  });
            };

            $scope.unsetAsProject = function () {
                ProjectsService.deleteProject($scope.routeId)
                  .success(function (pData) {
                      $scope.isProject = false;
                      MessageService.send('projectUnset', $scope.route);
                      $rootScope.splice($scope.projects, 'name', LoginService.getName());
                  });
            };
        }]);
