import { AuthorInterface } from './author.interface';
import { GenreInterface } from './genre.interface';

export interface BookInterface {
  _id: string;
  title: string;
  description: string;
  discount: number;
  price: number;
  image: any;
  imagePath: string;
  authors: AuthorInterface[];
  genres: GenreInterface[];
}
