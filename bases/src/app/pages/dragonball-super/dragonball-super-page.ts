import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";
import { DragonballService } from '../../services/dragonball.service';



@Component({
  selector : 'dragonball-super', // Nombre del componente para usar en HTML
  imports: [CharacterListComponent, AddCharacterComponent], // Importamos el componente de la lista de personajes
  templateUrl: './dragonball-super-page.html', // Ruta de la plantilla HTML
})
export class DragonballSuperPage {

  public dragonballService = inject(DragonballService);

}
