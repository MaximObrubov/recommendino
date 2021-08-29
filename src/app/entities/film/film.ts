export interface FilmParams {
  name: string,
  rating: number,
}

class Film implements FilmParams {
  public static MAX_RATING = 10.0;
  
  public name: string;

  public rating: number;
  
  constructor(params: FilmParams) {
    this.name = params.name;
    this.rating = params.rating;
  }
  
  static percentRating(film: Film) {
    return `${Math.round((film.rating / Film.MAX_RATING) * 100)}%`;
  }
}

export default Film;
