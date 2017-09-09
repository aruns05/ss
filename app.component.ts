﻿import { Component } from '@angular/core'

@Component({
selector:'my-app',
template:`<h1>
{{name}}
</h1>
  <div class="container"> 
      <h2>Guess the Number !</h2> 
      <p class="well lead">Guess the computer generated random
         number between 1 and 1000.</p>

      <label>Your Guess: </label> 
      <input type="number" [value]="guess" (input)="guess = 
       $event.target.value" />


      <button (click)="verifyGuess()" class="btn btn-primary btn-sm">
      Verify</button> 


      <button (click)="initializeGame()" class="btn btn-warning btn-sm">
      Restart</button> 
    <div> 
      <p *ngIf="deviation<0" class="alert alert-warning">
      Your guess is higher.</p>
      <p *ngIf="deviation>0" class="alert alert-warning">
      Your guess is lower.</p>
      <p *ngIf="deviation===0" class="alert alert-success">
      Yes! That's it.</p> 
    </div> 
      <p class="text-info">No of guesses : 
        <span class="badge">{{noOfTries}}</span> 
      </p> 
    </div>

    <div>
        <h3>Trying to implement Data Pipes</h3>
        <h3>My name in Lower : {{myname|lowercase}}</h3>
        <h3>My name in Upper : {{myname|uppercase}}</h3>
        <b>Date of Birth:</b> My joining Date is {{birthDate | date:"dd/MM/yyyy"}}<br/>          
    </div>
    <div>
        <li *ngFor="let std of studentinfo">
        ID:  {{std.id}}
        Name: {{std.name}}
        </li> 
    </div>


`})

export class Appcomponent
{
    name='Arun trying to learn Angular 2'

    deviation: number; 
  noOfTries: number; 
  original: number; 
  guess: number; 

studentinfo:Array<any> =[{id:1, name:'Arun'},{id:2, name: 'Shubha'},{id:3, name: 'Anusha'},{id:4, name: 'Roopa'},{id:5, name: 'Anand'}];

birthDate = new Date(1984, 6, 24);  
    myname = 'Arun';  
  grade = 0.99;  
    rating = 8.36;  
    priceEuro = 80.6;  
    priceUsd = 145.6;  


  constructor() { 
    this.initializeGame(); 
  } 
  initializeGame() { 
    this.noOfTries = 0; 
    this.original = Math.floor((Math.random() * 1000) + 1); 
    this.guess = null; 
    this.deviation = null; 
  } 
  verifyGuess() { 
    this.deviation = this.original - this.guess; 
    this.noOfTries = this.noOfTries + 1; 
  } 
    
Clickforhi(){
    
}

}