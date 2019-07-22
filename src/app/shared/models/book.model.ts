import { AuthorInterface } from './author.interface';
import { BookInterface } from './book.interface';
import { GenreInterface } from './genre.interface';
import AuthorModel from './author.model';
import GenreModel from './genre.model';

class BookModel implements BookInterface {
  public _id: string;
  public title: string;
  public description: string;
  public discount: number;
  public price: number;
  public image: any;
  public imagePath: string;
  public authors: AuthorInterface[];
  public genres: GenreInterface[];

  constructor(book: BookInterface) {
    this._id = book._id;
    this.title = book.title;
    this.description = book.description;
    this.discount = book.discount;
    this.price = book.price;
    this.image = book.image;
    this.imagePath = book.imagePath;
    this.authors = book.authors.map((author: AuthorInterface) => new AuthorModel(author));
    this.genres = book.genres.map((genre: GenreInterface) => new GenreModel(genre));
  }
}

export default BookModel;
