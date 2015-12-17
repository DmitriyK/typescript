/// <reference path="typings/tsd.d.ts" />
/// <reference path="app.common.ts" />

module app {
	console.log("app");
	angular.module("app", ["app.common"])
		.controller("test1", function ($scope) {
			var cc = new app.common.prices("hello world");
			$scope.sayHello = function () {
				let x = cc.price;
				alert(x);
			}
		});

}