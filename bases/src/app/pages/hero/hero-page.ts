import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl : './hero-page.html',
  imports : [UpperCasePipe],
})


export class HeroPage {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(){

    return `${ this.name() } - ${ this.age() }`;
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeHero(){
    this.name.update(( nombreViejo => 'jano'));


  }

  changeAge(){

    this.age.update(( edadVieja => 36 ));

  }

  // capitalizate(){


  //   return this.name().toUpperCase();
  // }
  capitalizate = computed(() => this.name().toUpperCase())
}