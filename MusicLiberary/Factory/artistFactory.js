myApp.factory('artistFactory', function ($http) {
    var factory = {};
    factory.getList = function () {
        var url = "../Data/artist.json";
        return $http.get(url);
    }
    return factory;
});