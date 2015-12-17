/// <reference path="typings/tsd.d.ts" />

module app.common {
	console.log("app.common");
	export class prices {
		//price: string;
		constructor(public price: string) {
			this.price = price;
		}
	}
	angular.module("app.common", [])
		.controller("test2", function ($scope) {
			$scope.sayHello = function () {
				let x = "hello world common";
				alert(x);
			}
		});
}