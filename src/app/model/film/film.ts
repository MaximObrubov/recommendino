export interface FilmParams {
  name: string,
  rating: number,
}

class Film implements FilmParams {
  public name: string;

  public rating: number;
  
  
  constructor(params: FilmParams) {
    this.name = params.name;
    this.rating = params.rating;
  }
}

export default Film;
