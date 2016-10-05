angular.module("MyApp", [])
    .service('appDialogService', ['$uibModal', function ($uibModal) {
        /// <summary>
        /// Dialog Service
        /// </summary>
        /// <param name="$modal">Modal Instance</param>
        'use strict';

        // #region << Dialog Implementation>>
        this.showDialog = function (templateUrl, controllerName, size, item) {
            /// <summary>
            /// show custom Dialog
            /// </summary>
            /// <param name="templateUrl">path of the HTML partial page to render on dialog</param>
            /// <param name="controllerName">Name of the controller which is responsible to load the partial page</param>
            /// <param name="item">Resolve parameter of dialog for additional settings</param>
            /// <param name="customWindowClass">CSS class to manipulate the modal dialog</param> 
            var modalInstance = $uibModal.open({
                templateUrl: templateUrl,
                controller: controllerName,
                size: size,
                keyboard: false,
                backdrop: 'static',
                resolve: {
                    item: function () { return item; }
                }
            });
            return modalInstance;
        };

        // #endregion
    }]);