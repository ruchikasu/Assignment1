var app = angular.module("MyApp", ['ngTable', 'ui.bootstrap']);
app.controller('EngineeringController', ['$scope', 'ngTableParams', '$uibModal', '$http',
    function ($scope, ngTableParams, $uibModal, $http) {

        $scope.title = "Engineering Department"; // Title on the page            
        $scope.Items = [];

        //#region ng-table settings
        $scope.tableParams = new ngTableParams(
             {
                 page: 1,
                 count: 10,
                 sorting: {}
             },
             {
                 counts: [],                           // hide page counts control
                 total: $scope.Items.length,          // length of data         
                 defaultSort: 'asc',
                 getData: function ($defer, params) {
                     $http.get("/Home/GetData").success(function (data) {
                         $scope.Items = data;
                         $defer.resolve($scope.Items);
                     });                   
                 }
             });

        $scope.onOpenClick = function (studentInfo) {
            var item, modalInstance;
            item = { studentInfo: studentInfo };
            modalInstance = $uibModal.open({
                templateUrl: 'Edit.html',
                controller: 'EngineeringEditController',
                size: 'md',
                keyboard: false,
                backdrop: 'static',
                resolve: {
                    item: function () { return item; }
                }
            });
            modalInstance.result.then(function (result) {
                $scope.Items = result;

            })
        };

    }]);

