import { AuthorInterface } from '@app/shared/models/author.interface';
import { GenreInterface } from '@app/shared/models/genre.interface';

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
