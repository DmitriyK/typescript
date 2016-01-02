/// <reference path="typings/tsd.d.ts" />
/// <reference path="app.common.ts" />
var app;
(function (app) {
    console.log("app");
    angular.module("app", ["app.common"])
        .controller("firstController", function ($scope) {
        var price = new app.common.Price("hello world");
        $scope.sayHello = function () {
            var x = price.price;
            alert(x);
        };
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map