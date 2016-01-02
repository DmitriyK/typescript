/// <reference path="typings/tsd.d.ts" />

module app.common {
	console.log("app.common");
	interface IPrices {
		price: string;
	}
	export class Price implements IPrices{
		price: string;
		constructor(price: string) {
			this.price = price;
		}
	}
	angular.module("app.common", [])
		.controller("secondController", function ($scope) {
			$scope.sayHello = function ():void {
				let x = "hello world common";
				alert(x);
			}
		});
}