import Author from './Author';
import Genre from './Genre';

class Book {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public discount: number,
    public price: number,
    public image: any,
    public imagePath: string,
    public authors: Author[],
    public genres: Genre[],
  ) {
  }
}

export default Book;
