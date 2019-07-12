import Book from './Book';
import Author from './Author';
import Genre from './Genre';

class ServerResponse {
  public status: string;
  public text?: string;
  public data?: {
    books?: Book[],
    authors?: Author[],
    genres?: Genre[]
  };
}

export default ServerResponse;
