/// <reference path="typings/tsd.d.ts" />
/// <reference path="app.common.ts" />
var app;
(function (app) {
    console.log("app");
    angular.module("app", ["app.common"])
        .controller("test", function ($scope) {
        var cc = new app.common.prices("hello world");
        $scope.sayHello = function () {
            var x = cc.price;
            alert(x);
        };
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map