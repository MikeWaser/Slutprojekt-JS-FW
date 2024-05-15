import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  [key: string]: any;
}

interface State {
  favoriteBooks: Book[];
  readBooks: Book[];
}

interface Action {
  type: string;
  payload: any;
}

const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const initialState: State = {
  favoriteBooks: [],
  readBooks: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favoriteBooks: [...state.favoriteBooks, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favoriteBooks: state.favoriteBooks.filter(book => book.id !== action.payload) };
    case 'ADD_READ_BOOK':
      return { ...state, readBooks: [...state.readBooks, action.payload] };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
