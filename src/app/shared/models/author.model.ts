import { AuthorInterface } from './author.interface';

class AuthorModel implements AuthorInterface {
  public _id: string;
  public name: string;

  constructor(author: AuthorInterface) {
    this._id = author._id;
    this.name = author.name;
  }
}

export default AuthorModel;
