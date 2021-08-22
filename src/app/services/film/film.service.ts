import { Injectable } from '@angular/core';

import Film from '../../model/film/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  /**
   * films collection
   */
  private films: Array<Film> = [];

  constructor() {
    
  }
  
  getFilms() {
    // TODO: get films from file or API
    this.films = [
      {
        name: 'Last Action Hero',
        rating: 10.0,
      },
      {
        name: 'Hero',
        rating: 10.0,
      },
    ]
    return this.films;
  }
}
