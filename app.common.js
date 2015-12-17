/// <reference path="typings/tsd.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        console.log("app.common");
        var prices = (function () {
            //price: string;
            function prices(price) {
                this.price = price;
                this.price = price;
            }
            return prices;
        })();
        common.prices = prices;
        angular.module("app.common", [])
            .controller("test2", function ($scope) {
            $scope.sayHello = function () {
                var x = "hello world common";
                alert(x);
            };
        });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=app.common.js.map