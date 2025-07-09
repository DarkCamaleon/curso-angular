import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  imports : [GifListComponent],
  templateUrl: './search.component.html',

})
export default class SearchComponent {

  gifservice = inject( GifService );

  onSearch( query : string){
    this.gifservice.searchGifs(query);
    console.log( this.gifservice );
  }
 }
