import Author from './Author';
import Genre from './Genre';

class Book {
  _id: string;
  title: string;
  description: string;
  discount: number;
  price: number;
  imagePath: string;
  authors: Author[];
  genres: Genre[];
}

export default Book;
