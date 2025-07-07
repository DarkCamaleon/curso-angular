import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  // Creamos señales reactivas para el nombre y poder del personaje a agregar
  name = signal('');   // Señal para el nombre del personaje
  power = signal(0);   // Señal para el poder del personaje
  newCharacter = output<Character>();

  // Método para agregar un nuevo personaje a la lista
  addCharacter() {
    // Mostramos en consola los valores actuales de nombre y poder
    console.log(this.name(), this.power());

    // Validamos que el nombre no esté vacío y el poder sea mayor a 0
    if (!this.name() || !this.power() || this.power() <= 0) {
      return; // Si no es válido, salimos sin hacer nada
    }

    // Creamos el nuevo personaje con un id incremental
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
/*       id : this.characters().length + 1,*/
      name: this.name(),
      power: this.power(),
    };

    // Actualizamos la lista de personajes agregando el nuevo personaje
    /* this.characters.update((list) => [...list,newCharacter]); */
    this.newCharacter.emit(newCharacter);
    console.log({ newCharacter });
    // Limpiamos los campos del formulario
    this.resetFields();
  }

  // Método para limpiar los campos del formulario
  resetFields() {
    this.name.set('');   // Reiniciamos el nombre
    this.power.set(0);   // Reiniciamos el poder
  }

}
