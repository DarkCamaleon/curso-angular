import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponde } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


// {
//   'goku' : [gif1,gif2,gif3],
//   'tom' : [gif1,gif2,gif3],
//   'veheta' : [gif1,gif2,gif3],
// }

// Record<string, Gif[]>

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
   }

  loadTrendingGifs(){

    this.http.get<GiphyResponde>( `${ environment.giphyUrl }/gifs/trending`,
      {
        params : {
          api_key : environment.apikey,
          limit : 20,
        }
      }
    ).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({gifs});
    });

  }

  searchGifs ( query : string ){
    return this.http.get<GiphyResponde>(`${ environment.giphyUrl}/gifs/search`,{
      params : {
        api_key : environment.apikey,
        q : query,
        limit : 20,
      }
    }).pipe(
      map( ({ data })=>data),
      map( (items )=> GifMapper.mapGiphyItemsToGifArray( items ) ),

      // historial
      tap(( items ) => {
      this.searchHistory.update( ( history ) => ({
        ...history,
        [query.toLowerCase()] : items ,
      }));
    })
  );
  }

}