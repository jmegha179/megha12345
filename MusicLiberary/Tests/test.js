// unit testing for Artist controller
describe('with httpBackend', function () {
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    $scope = $rootScope.$new();

    $httpBackend.when('GET', '../artist.json')
      .respond({
        things: 'and stuff'
      });

    artistCtrl = $controller('artistCtrl', {
      $scope: $scope
    });
    $httpBackend.flush();
  }));

  it('should set data to "things and stuff"', function () {
    expect($scope.item).toEqual({
      things: 'and stuff'
    });
  });
});
//  unit Testing for list controller

describe('with httpBackend', function () {
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    $scope = $rootScope.$new();

    $httpBackend.when('GET', '../music.json')
      .respond({
        things: 'and stuff'
      });

    musicCtrl = $controller('musicCtrl', {
      $scope: $scope
    });
    $httpBackend.flush();
  }));

  it('should set data to "things and stuff"', function () {
    expect($scope.names).toEqual({
      things: 'and stuff'
    });
  });
});
//  Routing Example
describe('UI-Router State Change Tests', function () {
  var $location, $rootScope, $scope, $state, $templateCache;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_$rootScope_, _$state_, _$templateCache_, _$location_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $templateCache = _$templateCache_;
    $location = _$location_;
  }));
  describe('State Change: Home', function () {
    beforeEach(function () {
      $templateCache.put(null, 'partial/partial1.html');
    });
    it('should go to the home state', function () {
      $location.url('Home');
      $rootScope.$digest();
      expect($state.href('Home')).toEqual('#/');
      expect($rootScope.pageTitle).toEqual('Home');
    });
  });
  describe('State Change: Artist', function () {
    beforeEach(function () {
      $templateCache.put(null, 'partial/partial2.html');
    });
    it('should go to the home state', function () {
      $location.url('Artist');
      $rootScope.$digest();
      expect($state.href('Artist')).toEqual('#/');
      expect($rootScope.pageTitle).toEqual('Artist');
    });
  });
  describe('State Change: Gallary', function () {
    beforeEach(function () {
      $templateCache.put(null, 'partial/partial3.html');
    });
    it('should go to the home state', function () {
      $location.url('Gallary');
      $rootScope.$digest();
      expect($state.href('Gallary')).toEqual('#/');
      expect($rootScope.pageTitle).toEqual('Gallary');
    });
  });
  describe('State Change: Login', function () {
    beforeEach(function () {
      $templateCache.put(null, 'partial/partial4.html');
    });
    it('should go to the home state', function () {
      $location.url('Login');
      $rootScope.$digest();
      expect($state.href('Login')).toEqual('#/');
      expect($rootScope.pageTitle).toEqual('Login');
    });
  });
});