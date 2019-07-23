import { GenreInterface } from '@app/shared/models/genre.interface';

export class GenreModel implements GenreInterface {
  public _id: string;
  public name: string;

  constructor(genre: GenreInterface) {
    this._id = genre._id;
    this.name = genre.name;
  }
}
