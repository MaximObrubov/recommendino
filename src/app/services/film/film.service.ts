import { Injectable } from '@angular/core';

import Film from '../../entities/film/film';

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
        rating: 5,
      },
      {
        name: 'Hero',
        rating: 9,
      },
    ]
    return this.films;
  }
}
