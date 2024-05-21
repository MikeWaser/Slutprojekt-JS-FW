import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { State, Action, ReadBook } from '../types';

export const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const initialState: State = {
  favoriteBooks: [],
  readBooks: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favoriteBooks: [...state.favoriteBooks, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favoriteBooks: state.favoriteBooks.filter(book => book.key !== action.payload) };
    case 'ADD_READ_BOOK':
      return { ...state, readBooks: [...state.readBooks, action.payload as ReadBook] };
    case 'REMOVE_READ_BOOK':
      return { ...state, readBooks: state.readBooks.filter(book => book.key !== action.payload) };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteBooks');
    const storedReadBooks = localStorage.getItem('readBooks');
    if (storedFavorites || storedReadBooks) {
      dispatch({
        type: 'LOAD_STATE',
        payload: {
          favoriteBooks: storedFavorites ? JSON.parse(storedFavorites) : [],
          readBooks: storedReadBooks ? JSON.parse(storedReadBooks) : []
        }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(state.favoriteBooks));
    localStorage.setItem('readBooks', JSON.stringify(state.readBooks));
  }, [state.favoriteBooks, state.readBooks]);

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
