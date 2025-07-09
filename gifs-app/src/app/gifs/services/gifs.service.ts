import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponde } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

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
    this.http.get<GiphyResponde>(`${ environment.giphyUrl}/gifs/search`,{
      params : {
        api_key : environment.apikey,
        q : query,
        limit : 20,
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      console.log({ gifs })
    });
  }

}