var personalWebsiteControllers = angular.module('personalWebsiteControllers', []);

personalWebsiteControllers.controller('PracaCtrl', ['$rootScope','$scope','$analytics',
    function ($rootScope,$scope,$analytics) {
        $rootScope.page = " - Salary Calculator";
        $scope.salary_net = -1;
        $scope.calculate = function(){
            $scope.salary_net = $scope.salary_gross - $scope.salary_gross*(30/100)+" zl";
            $analytics.eventTrack('calculate Salary (' + $scope.salary_gross + ' zl gross)'  , {  category: 'Calculator', label: 'Calculator Salary' });
        }
}]);

personalWebsiteControllers.controller('PortfolioCtrl', ['$rootScope',
    function ($rootScope) {
        $rootScope.page = " - Portfolio";
        $rootScope.loadLang();

}]);

personalWebsiteControllers.controller('HomeCtrl', ['$rootScope','$translate',
    function ($rootScope,$translate) {

        $rootScope.loadLang();

        if($translate.use()=='en'){
            $rootScope.page = " - Home";
        }

        if($translate.use()=='es'){
            $rootScope.page = " - Inicio";
        }
    }]);