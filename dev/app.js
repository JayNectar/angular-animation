var app = angular.module('angularAnimation', ['ngAnimate', 'ngMaterial', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.when('/demo', {
        template: '<demo></demo>'
    });

  $routeProvider.otherwise({redirectTo: '/demo'});
}])
    .config(['$mdThemingProvider', function($mdThemingProvider){

    $mdThemingProvider.theme('default')
        .primaryPalette("deep-purple", {
            'default': '500',
            'hue-1': '600',
            'hue-2': '700',
            'hue-3': '800'
        })
        .accentPalette('purple', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        })
        .warnPalette('deep-orange', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        });



    $mdThemingProvider.theme('purple')
        .primaryPalette("purple", {
            'default': '500',
            'hue-1': '600',
            'hue-2': '700',
            'hue-3': '800'
        })
        .accentPalette('purple', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        })
        .warnPalette('red', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        });

    $mdThemingProvider.theme('deep-purple')
        .primaryPalette("deep-purple", {
            'default': '500',
            'hue-1': '600',
            'hue-2': '700',
            'hue-3': '800'
        })
        .accentPalette('deep-purple', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        })
        .warnPalette('red', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        });



    $mdThemingProvider.theme('deep-orange')
        .primaryPalette("deep-orange", {
            'default': '500',
            'hue-1': '600',
            'hue-2': '700',
            'hue-3': '800'
        })
        .accentPalette('deep-orange', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        })
        .warnPalette('red', {
            'default': '400',
            'hue-1': '500',
            'hue-2': '600',
            'hue-3': '700'
        });
    $mdThemingProvider.alwaysWatchTheme(true);
}]);