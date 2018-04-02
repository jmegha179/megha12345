myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('Home', {
            url: "/",
            templateUrl: "partial/home.html"
        })
        .state('Artist', {
            url: "/Artist",
            templateUrl: "partial/artist.html",
            controller: "artistCtrl"
        })
        .state("Gallary", {
            url: "/Gallary",
            templateUrl: "partial/gallary.html"
        })
        .state("Login", {
            url: "/Login",
            templateUrl: "partial/login.html",
            controller: "loginCtrl"
        });
});