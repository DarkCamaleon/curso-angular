import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface Character {
  id : number,
  name : string,
  power : number,

}

@Component({
  imports: [],
  templateUrl: './dragonball-page.html',

})
export class DragonballPage {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id : 1, name : 'goku' , power : 9001},
    // { id : 2, name : 'vegeta' , power : 4000},
    // { id : 3, name : 'gohan' , power : 5000},
    // { id : 4, name : 'yamcha' , power : 500},
  ]);

//   powerClasses = computed(() => {
//     return {
//       'text-danger' : true,
//     }
//   });
addCharacter (){
  console.log(this.name() , this.power());

  if(!this.name() || !this.power() || this.power() <= 0){
    return;

  }

  const newCharacter : Character = {
    id : this.characters().length + 1,
    name : this.name(),
    power : this.power(),
  };

  this.characters.update((list) => [...list,newCharacter]);
  this.resetFields();
}

resetFields(){
  this.name.set('');
  this.power.set(0);
}

}
