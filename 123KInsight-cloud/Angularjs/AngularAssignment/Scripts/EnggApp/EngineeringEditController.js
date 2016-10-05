angular.module("MyApp")
    .controller('EngineeringEditController', ['$scope', '$uibModalInstance', 'item', '$http',
        function ($scope, $uibModalInstance, item, $http) {
            'use strict';
           
            item = item || {};
            item.studentInfo = item.studentInfo || {};
            $scope.studentInfo= angular.copy(item.studentInfo);
           
            $scope.onSaveClick = function (Item) {
                /// <summary>
                /// Event Handler to save dialog
                /// </summary>
                /// <param name="Item">Model Object</param>
                if ($scope.editForm.$valid) { // check to make sure the form is completely valid
                    $http.post("/Home/Post", { student: Item }).success(function (data) {
                        $uibModalInstance.close(data);
                    });

                }
            };

            $scope.onCancelClick = function (Item) {
                /// <summary>
                /// Event Handler to cancel the dialog
                /// </summary>
                /// <param name="Item">Model Object</param>
                $uibModalInstance.dismiss('cancel');
            }
        }]);