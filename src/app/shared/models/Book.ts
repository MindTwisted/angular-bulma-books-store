import Author from './Author';
import Genre from './Genre';

class Book {
  public _id: string;
  public title: string;
  public description: string;
  public discount: number;
  public price: number;
  public imagePath: string;
  public authors: Author[];
  public genres: Genre[];
}

export default Book;
