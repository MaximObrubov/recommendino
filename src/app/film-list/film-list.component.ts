import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';
import Film from '../model/film/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  providers:  [ FilmService ],
})
export class FilmListComponent implements OnInit {
  
  films: Film[] = [];
  
  selectedFilm: Film | null = null;
  
  constructor(private service: FilmService) {}

  ngOnInit(): void {
    this.films = this.service.getFilms();
  }
  
  selectFilm(film: Film) {
    this.selectedFilm = film;
  }
}
