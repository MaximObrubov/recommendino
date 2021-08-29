import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';
import Film from '../entities/film/film';

export interface Film2Template extends Film {
  ratingPerc: string,
}

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  providers:  [ FilmService ],
})
export class FilmListComponent implements OnInit {
  
  MAX_RATING = 0;
  
  films: Film2Template[] = [];
  
  selectedFilm: Film | null = null;
  
  constructor(private service: FilmService) {}

  ngOnInit(): void {
    this.films = this.service.getFilms().map((f: Film) => {
      return {
        ...f,
        ratingPerc: Film.percentRating(f)
      }
    })
    this.MAX_RATING = Film.MAX_RATING;
  }
  
  selectFilm(film: Film) {
    this.selectedFilm = film;
  }
}
