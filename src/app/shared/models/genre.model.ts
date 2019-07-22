import { GenreInterface } from './genre.interface';

class GenreModel implements GenreInterface {
  public _id: string;
  public name: string;

  constructor(genre: GenreInterface) {
    this._id = genre._id;
    this.name = genre.name;
  }
}

export default GenreModel;
