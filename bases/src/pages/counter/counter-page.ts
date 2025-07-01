import { Component } from "@angular/core";

@Component({
  template : `
  <h1> counter : {{ counter }} </h1>
  <button (click)="increaseBy(1)"> +1 </button>
  `,
})

export class CounterPage {
  counter = 15;

  increaseBy(value : number){
    this.counter += value;

  }
}