import Book from './Book';
import Author from './Author';
import Genre from './Genre';

class ServerResponse {
  status: string;
  text?: string;
  data?: {
    books?: Book[],
    authors?: Author[],
    genres?: Genre[]
  };
}

export default ServerResponse;
