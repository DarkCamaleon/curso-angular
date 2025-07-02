import { Component, signal } from "@angular/core";
import { RouterOutlet } from '@angular/router';

@Component({
  templateUrl : './counter-page.html',
  styleUrl : './counter-page.css',
})
// @Component({
//   template : `
//   <h1> counter : {{ counter }} </h1>
//   <button (click)="increaseBy(1)"> +1 </button>
//   `,
// })

export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value : number){
    this.counter += value;
    this.counterSignal.update( (current) => current + value );

  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);

  }
}