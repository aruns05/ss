"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Appcomponent = (function () {
    function Appcomponent() {
        this.name = 'Arun trying to learn Angular 2';
        this.studentinfo = [{ id: 1, name: 'Arun' }, { id: 2, name: 'Shubha' }, { id: 3, name: 'Anusha' }, { id: 4, name: 'Roopa' }, { id: 5, name: 'Anand' }];
        this.birthDate = new Date(1984, 6, 24);
        this.myname = 'Arun';
        this.grade = 0.99;
        this.rating = 8.36;
        this.priceEuro = 80.6;
        this.priceUsd = 145.6;
        this.initializeGame();
    }
    Appcomponent.prototype.initializeGame = function () {
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.guess = null;
        this.deviation = null;
    };
    Appcomponent.prototype.verifyGuess = function () {
        this.deviation = this.original - this.guess;
        this.noOfTries = this.noOfTries + 1;
    };
    Appcomponent.prototype.Clickforhi = function () {
    };
    return Appcomponent;
}());
Appcomponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>\n{{name}}\n</h1>\n  <div class=\"container\"> \n      <h2>Guess the Number !</h2> \n      <p class=\"well lead\">Guess the computer generated random\n         number between 1 and 1000.</p>\n\n      <label>Your Guess: </label> \n      <input type=\"number\" [value]=\"guess\" (input)=\"guess = \n       $event.target.value\" />\n\n\n      <button (click)=\"verifyGuess()\" class=\"btn btn-primary btn-sm\">\n      Verify</button> \n\n\n      <button (click)=\"initializeGame()\" class=\"btn btn-warning btn-sm\">\n      Restart</button> \n    <div> \n      <p *ngIf=\"deviation<0\" class=\"alert alert-warning\">\n      Your guess is higher.</p>\n      <p *ngIf=\"deviation>0\" class=\"alert alert-warning\">\n      Your guess is lower.</p>\n      <p *ngIf=\"deviation===0\" class=\"alert alert-success\">\n      Yes! That's it.</p> \n    </div> \n      <p class=\"text-info\">No of guesses : \n        <span class=\"badge\">{{noOfTries}}</span> \n      </p> \n    </div>\n\n    <div>\n        <h3>Trying to implement Data Pipes</h3>\n        <h3>My name in Lower : {{myname|lowercase}}</h3>\n        <h3>My name in Upper : {{myname|uppercase}}</h3>\n        <b>Date of Birth:</b> My joining Date is {{birthDate | date:\"dd/MM/yyyy\"}}<br/>          \n    </div>\n    <div>\n        <li *ngFor=\"let std of studentinfo\">\n        ID:  {{std.id}}\n        Name: {{std.name}}\n        </li> \n    </div>\n\n\n"
    }),
    __metadata("design:paramtypes", [])
], Appcomponent);
exports.Appcomponent = Appcomponent;
//# sourceMappingURL=app.component.js.map