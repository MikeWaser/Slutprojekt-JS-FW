export interface Book {
    key: string;
    title: string;
    author_name: string[];
    description: string;
    cover_i: number;
  }
  
  export interface State {
    favoriteBooks: Book[];
    readBooks: Book[];
  }
  
  export interface Action {
    type: string;
    payload: any;
  }
  