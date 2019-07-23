import { AuthorInterface } from '@app/shared/models/author.interface';

export class AuthorModel implements AuthorInterface {
  public _id: string;
  public name: string;

  constructor(author: AuthorInterface) {
    this._id = author._id;
    this.name = author.name;
  }
}
