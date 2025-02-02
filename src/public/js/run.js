angular.module('SETTER').run([
    '$rootScope',
    '$location',
    '$window',
    '$timeout',
    '$cookies',
    '$routeParams',
    'UsersService',
    'GymsService',
    'WallsService',
    'RoutesService',
    'LoginService',
    'DateFormatService',
    'SelectedRouteService',
    'MessageService',
    'localStorageService',
    function (
        $rootScope,
        $location,
        $window,
        $routeParams,
        $timeout,
        $cookies,
        UsersService,
        GymsService,
        WallsService,
        RoutesService,
        LoginService,
        DateFormatService,
        SelectedRouteService,
        MessageService,
        localStorageService
    ) {
        'use strict';

        // Add to string prototype to do sprintf
        if (!String.prototype.format) {
            String.prototype.format = function () {
                var args = arguments;

                return this.replace(/\{(\d+)\}/g, function (match, number) {
                    if (args[number] === 'undefined') {
                        return match;
                    }
                    return args[number];
                });
            };
        }

        FastClick.attach(document.body);
        $rootScope.alerts = [];



        // Set the global cha
        $rootScope.UNRATED_STRING = "Unrated";

        $rootScope.navigateToLogin = function () {
            $location.path('login');
        };

        $rootScope.navigateToSettings = function () {
            $location.path('settings');
        };

        $rootScope.navigateToPasswordReset = function () {
            $location.path('password/reset');
        };

        $rootScope.navigateToRegisterUser = function () {
            $location.path('user/register');
        };

        $rootScope.navigateToRegisterGym = function () {
            $location.path('gym/register');
        };

        $rootScope.navigateToLogout = function () {
            var yes = confirm("Are you sure you want to log out?");
            if (yes) {
                $location.path('logout');
            }
        };

        $rootScope.navigateToContact = function () {
            $location.path('contact');
        };

        $rootScope.navigateToTOS = function () {
            $location.path('tos');
        };

        $rootScope.navigateToHome = function () {
            $location.path('login');
        };

        $rootScope.navigateToAccountSettings = function () {
            $location.path('settings');
        };

        $rootScope.navigateToWalls = function (pGymId) {
            $location.path('gyms/' + pGymId + '/walls');
        };

        $rootScope.navigateToWall = function (pGymId, pWallId) {
            $location.path('gyms/' + pGymId + '/walls/' + pWallId);
        };

        $rootScope.navigateToGyms = function () {
            $location.path('gyms');
        };

        $rootScope.navigateToGym = function (pGymId) {
            $location.path('gyms/' + pGymId);
        };

        $rootScope.navigateToCreateRoute = function (pGymId, pWallId) {
            $location.path('gyms/' + pGymId + '/walls/' + pWallId + '/routes/create');
        };

        $rootScope.navigateToSetters = function (pGymId) {
            $location.path('gyms/' + pGymId + '/setters');
        };

        $rootScope.navigateToAddSetters = function (pGymId) {
            $location.path('gyms/' + pGymId + '/setters/add');
        };

        $rootScope.navigateToRoute = function (pGymId, pWallId, pRouteId) {
            $location.path('gyms/' + pGymId + '/walls/' + pWallId + '/routes/' + pRouteId);
        };

        $rootScope.navigateToEditRoute = function (pGymId, pWallId, pRouteId) {
            $location.path('gyms/' + pGymId + '/walls/' + pWallId + '/routes/' + pRouteId + '/edit');
        };

        $rootScope.navigateToUser = function (pUserId) {
            $location.path('users/' + pUserId);
        };

        $rootScope.navigateToSetters = function (pGymId) {
            $location.path('gyms/' + pGymId + '/setters');
        };

        $rootScope.navigateToSuggestionsPage = function () {
            $location.path('suggestions');
        };

        $rootScope.navigateToRouteManager = function (pGymId) {
            $location.path('gyms/' + pGymId + '/routes');
        };

        $rootScope.navigateToBlog = function () {
            $location.path('blog');
        };

        $rootScope.navigateToGymSuggestions = function (pGymId) {
            $location.path('gyms/' + pGymId + '/suggestions');
        };

        $rootScope.navigateToAlerts = function (pGymId) {
            $location.path('gyms/' + pGymId + '/alerts');
        };

        $rootScope.navigateToAddSetter = function (pGymId) {
            $location.path('gyms/' + pGymId + '/setters/add');
        };

        $rootScope.back = function () {
            $window.history.back();
        };

        $rootScope.isGymAccount = function () {
            return LoginService.isGymAccount();
        };

        $rootScope.isUserAccount = function () {
            return LoginService.isUserAccount();
        };

        $rootScope.getAccountId = function () {
            return LoginService.getAccountId();
        };

        $rootScope.isGymAdmin = function () {
            return $rootScope.getAccountId() === gymId
        };

        $rootScope.isLoggedIn = function () {
            return LoginService.isLoggedIn();
        };

        $rootScope.getHomeGymId = function () {
            return LoginService.getHomeGymId();
        };

        $rootScope.showAlerts = function (pAlerts) {
            angular.element(".alert-modal").foundation('reveal', 'open');
            $rootScope.alerts = pAlerts;
        };

        if (localStorageService.get('cookies')) {
            $cookies = localStorageService.get('cookies');
        }

        if (LoginService.hasTokenInCookie()) {
            LoginService.setHeaderFromCookie();
            LoginService.setTypeFromCookie();
            LoginService.setAccountIdFromCookie();
            LoginService.setHomeGymIdFromCookie();
            LoginService.setImageUrlFromCookie();
            LoginService.setNameFromCookie();
            LoginService.setGymNameFromCookie();
            $rootScope.imageUrl = LoginService.getImageUrl();
        }

        $rootScope.getAccountName = function () {
            return LoginService.getName();
        };


        $rootScope.formatGrade = function (pBoulderGrade, pTopRopeGrade, pLeadGrade) {
            return pBoulderGrade || pTopRopeGrade || pLeadGrade || 'Not Rated';
        };

        $rootScope.splice = function (pArray, pKey, pValue) {
          for (var i = pArray.length - 1; i >= 0; i--){
                if (pArray[i][pKey] === pValue){
                  pArray.splice(i, 1);
              }
          }
        };

        $rootScope.find = function (pArray, pKey, pValue) {
          for (var i = pArray.length - 1; i >= 0; i--){
                if (pArray[i][pKey] === pValue){
                  return pArray[i]
              }
          }
        };

        var paths = ['/'],
            userReg = /users\/[0-9]+$/,
            settersReg = /gyms\/[0-9]+\/setters$/,
            addSettersReg = /gyms\/[0-9]+\/setters\/add$/,
            gymsReg = /gyms\/[0-9]+$/,
            searchGymsReg = /gyms$/,
            zonesReg = /gyms\/[0-9]+\/walls$/,
            zoneReg = /gyms\/[0-9]+\/walls\/[0-9]+$/,
            routeReg = /gyms\/[0-9]+\/walls\/[0-9]+\/routes\/[0-9]+$/,
            routesReg = /gyms\/[0-9]+\/walls\/[0-9]+\/routes$/,
            editRouteReg = /gyms\/[0-9]+\/walls\/[0-9]+\/routes\/[0-9]+\/edit$/,
            createRouteReg = /gyms\/[0-9]+\/walls\/[0-9]+\/routes\/create$/,
            gymId,
            nothing,
            userId;

        $rootScope.$on('$routeChangeSuccess', function () {
            var currentPath,
                lastPath;
            currentPath = $location.$$path;
            lastPath = paths[0];
            $rootScope.lastPath = lastPath;
            paths.push(currentPath);
            paths.splice(0, 1);

            $rootScope.closeRouteModal();

            // Always slide right (handles back logic)
            $rootScope.slideInRight = false;

            if ($rootScope.currentPageIsGyms() && $rootScope.lastPageWasUser()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsSearchGyms() && $rootScope.lastPageWasUser()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsZones() && $rootScope.lastPageWasGyms()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsZone() && $rootScope.lastPageWasZones()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsRoute() && $rootScope.lastPageWasZone()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsEditRoute() && $rootScope.lastPageWasRoute()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsCreateRoute() && $rootScope.lastPageWasZone()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsRoute() && $rootScope.lastPageWasUser()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsRoute() && $rootScope.lastPageWasGyms()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsGyms() && $rootScope.lastPageWasSearchGyms()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsAddSetters() && $rootScope.lastPageWasSetters()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsUser() && $rootScope.lastPageWasSetters()) {
                $rootScope.slideInRight = true;
            }

            if ($rootScope.currentPageIsZone()) {
              $rootScope.hideZoneDropDown = true;
            } else {
              $rootScope.hideZoneDropDown = false;
            }

            // TODO: FIX ME
            $('.page').removeClass('slide-in-right');
            $('.page').removeClass('slide-in-left');
            if ($rootScope.slideInRight) {
                $('.page').addClass('slide-in-right');
            } else {
                $('.page').addClass('slide-in-left');
            }

            //$rootScope.$apply();
        });

        $rootScope.pageWasBookmarked = function () {
            return $rootScope.lastPath === '/';
        };

        // Current Page Check Logic
        $rootScope.currentPageIsRouteArchive = function () {
            return $location.$$path.match(routesReg);
        };

        $rootScope.currentPageIsGyms = function () {
            return $location.$$path.match(gymsReg);
        };

        $rootScope.currentPageIsSearchGyms = function () {
            return $location.$$path.match(searchGymsReg);
        };

        $rootScope.currentPageIsZones = function () {
            return $location.$$path.match(zonesReg);
        };

        $rootScope.currentPageIsZone = function () {
            return $location.$$path.match(zoneReg);
        };

        $rootScope.currentPageIsRoute = function () {
            return $location.$$path.match(routeReg);
        };

        $rootScope.currentPageIsEditRoute = function () {
            return $location.$$path.match(editRouteReg);
        };

        $rootScope.currentPageIsCreateRoute = function () {
            return $location.$$path.match(createRouteReg);
        };

        $rootScope.currentPageIsUser = function () {
            return $location.$$path.match(userReg);
        };

        $rootScope.currentPageIsSetters = function () {
            return $location.$$path.match(settersReg);
        };

        $rootScope.currentPageIsAddSetters = function () {
            return $location.$$path.match(addSettersReg);
        };

        $rootScope.currentPageIsOtherUser = function(pRouteUserId) {
            return $rootScope.getAccountId() !== parseInt(pRouteUserId);
        };



        // Last Page Check Logic
        $rootScope.lastPageWasRouteArchive = function () {
            return $rootScope.lastPath.match(routesReg) !== null;
        };

        $rootScope.lastPageWasSearchGyms = function () {
            return $rootScope.lastPath.match(searchGymsReg) !== null;
        };

        $rootScope.lastPageWasGyms = function () {
            return $rootScope.lastPath.match(gymsReg) !== null;
        };

        $rootScope.lastPageWasZones = function () {
            return $rootScope.lastPath.match(zonesReg) !== null;
        };

        $rootScope.lastPageWasZone = function () {
            return $rootScope.lastPath.match(zoneReg) !== null;
        };

        $rootScope.lastPageWasRoute = function () {
            return $rootScope.lastPath.match(routeReg) !== null;
        };

        $rootScope.lastPageWasEditRoute = function () {
            return $rootScope.lastPath.match(editRouteReg) !== null;
        };

        $rootScope.lastPageWasCreateRoute = function () {
            return $rootScope.lastPath.match(createRouteReg) !== null;
        };

        $rootScope.lastPageWasUser = function () {
            return $rootScope.lastPath.match(userReg) !== null;
        };

        $rootScope.lastPageWasSetters = function () {
            return $rootScope.lastPath.match(settersReg) !== null;
        };


        // Back Button Variables to hide/show menu and back button
        //Begins set to false
        $rootScope.backButtonActive = false;


        $rootScope.getGymImageSrc = function (pData) {
            if (!pData || !pData.url || pData.url === '') {
                return 'images/no_gym_image.png';
            }
            return pData.url;
        };

        $rootScope.getWallImageSrc = function (pData) {
            if (!pData || !pData.url || pData.url === '') {
                return 'images/no_gym_image.png';
            }
            return pData.url;
        };

        $rootScope.getUserImageSrc = function (pData) {
            if (!pData || !pData.url || pData.url === '') {
                return 'images/no_image.png';
            }
            return pData.url;
        };

        $rootScope.getImageUrlString = function () {
            return "url(" + LoginService.getImageUrl() + ")";
        };

        if ($rootScope.isUserAccount()) {
            $rootScope.userName =  $rootScope.getAccountName();
        }

        /*
            Used for forcing the data to be loaded directly up front and cached.
        */
        if (LoginService.isLoggedIn()) {
            LoginService.init();

            gymId = LoginService.getHomeGymId() || LoginService.getAccountId();
            nothing = function () {
                return undefined;
            };
            userId = null;

            GymsService.getGyms(nothing);

            GymsService.getGym(gymId, nothing);
            GymsService.getGymImage(gymId, nothing);
            GymsService.getHomeGymUsers(gymId, nothing);

            RoutesService.getCurrentBoulderRoutes(gymId, nothing);
            RoutesService.getCurrentTopRopeRoutes(gymId, nothing);
            RoutesService.getCurrentLeadRoutes(gymId, nothing);

            WallsService.getWallsInGym(gymId, nothing);

            if ($rootScope.isUserAccount()) {
                userId = LoginService.getAccountId();
                nothing = function () {
                    return undefined;
                };
                UsersService.getUser(userId, nothing);
                UsersService.getUserImage(userId, nothing);
            }
        }

        $rootScope.formatDates = function (pData) {
            var i,
                length;

            for (i = 0, length = pData.length; i < length; i += 1) {
                pData[i].date_format = DateFormatService.format(pData[i].date);
            }
        };

        $rootScope.isModalOpen = function () {
            return $rootScope.displayModal;
        };

        $rootScope.openModal = function () {
            $rootScope.displayModal = true;
        };

        $rootScope.closeModal = function () {
            $rootScope.displayModal = false;
        };

        $rootScope.openRouteModal = function (route) {
            route = angular.extend({}, route);

            $rootScope.openModal()

            // Hack needed to fix the activity not containing similar id structure
            if (route.route_id !== undefined) {
                route.id = route.route_id;
            }
            $rootScope.routeSelected = route;
            $rootScope.routeModalViewType = 'view';
            SelectedRouteService.setSelectedRoute(route);
        };

        $rootScope.closeRouteModal = function () {
            $rootScope.closeModal();
            $rootScope.routeSelected = null;
        };

        $rootScope.openCreateRouteModal = function () {
          $rootScope.gymId = $rootScope.getAccountId();
          MessageService.send('gymId', $rootScope.gymId);
          $rootScope.openModal();
          $rootScope.routeModalViewType = 'create';
        };
    }]);
