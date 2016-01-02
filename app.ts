/// <reference path="typings/tsd.d.ts" />
/// <reference path="app.common.ts" />

module app {
	console.log("app");
	angular.module("app", ["app.common"])
		.controller("firstController", function ($scope) {
			var price = new app.common.Price("hello world");
			$scope.sayHello = function ():void {
				let x = price.price;
				alert(x);
			}
		});
}