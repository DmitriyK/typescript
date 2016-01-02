/// <reference path="typings/tsd.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        console.log("app.common");
        var Price = (function () {
            function Price(price) {
                this.price = price;
            }
            return Price;
        })();
        common.Price = Price;
        angular.module("app.common", [])
            .controller("secondController", function ($scope) {
            $scope.sayHello = function () {
                var x = "hello world common";
                alert(x);
            };
        });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=app.common.js.map