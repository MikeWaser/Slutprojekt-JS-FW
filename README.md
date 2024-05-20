# Mikes Open Library Project

Welcome to Mikes Library! This app allows users to search for books using the Open Library API, mark their favorite books, and keep track of the books they have read along with ratings and reviews.

## Features

- **Search for Books**: Users can search for books by title, author, or subject.
- **Favorite Books**: Users can mark books as favorites and view all their favorite books.
- **Read Books**: Users can mark books as read, rate them, add a review, and keep track of the number of pages. They can also view all the books they have read and remove books from the read list if needed.
- **Book Details Popup**: Clicking on "View Details" shows a popup with detailed information about the book including cover image, title, author, genre, length, and description.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **SCSS**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **React Router**: A collection of navigational components that compose declaratively with your application.

## Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/booknerds-library.git
   
2. **Navigate to the project directory:**
    cd Slutprojekt-JS-FW

3. **Install the dependencies:**
    npm install

4. Run the development server:
    npm run dev

### Project Structure
Here's an overview of the project's structure:

Slutprojekt-JS-FW/
├── src/
│   ├── components/
│   │   ├── BookDetails/
│   │   │   ├── BookDetails.scss
│   │   │   └── BookDetails.tsx
│   │   ├── BookItem/
│   │   │   ├── BookItem.scss
│   │   │   └── BookItem.tsx
│   │   ├── BookList/
│   │   │   ├── BookList.scss
│   │   │   └── BookList.tsx
│   │   ├── DetailsPopup/
│   │   │   ├── DetailsPopup.scss
│   │   │   └── DetailsPopup.tsx
│   │   ├── FavoriteBooks/
│   │   │   ├── FavoriteBooks.scss
│   │   │   └── FavoriteBooks.
│   │   ├── Navbar/
│   │   │   ├── Navbar.scss
│   │   │   └── .Navbar.tsx
│   │   ├── ReadBooks/
│   │   │   ├── ReadBooks.scss
│   │   │   └── ReadBooks.tsx
│   │   ├── ReviewPopup/
│   │   │   ├── ReviewPopup.scss
│   │   │   └── ReviewPopup.tsx
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.scss
│   │   │   └── SearchBar.tsx
│   ├── context/
│   │   └── GlobalStateProvider.tsx
│   ├── hooks/
│   │   └── useBookSearch.ts
│   │   └── useGlobalState.ts
│   ├── Pages/
│   │   ├── FavoritesPage/
│   │   │   ├── FavoritesPage.scss
│   │   │   └── FavoritesPage.tsx
│   │   ├── HomePage/
│   │   │   ├── HomePage.scss
│   │   │    └── HomePage.tsx
│   │   ├── ReadBooksPage/
│   │   │    ├── ReadBooksPage.scss
│   │   │    └── ReadBooksPage.tsx
│   ├── styles/
│   │   ├── scss/
│   │   │   ├── _reset.scss
│   │   │   └── index.scss
│   ├── utils/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   └──  vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICNESE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
