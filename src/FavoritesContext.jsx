import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorites: () => {},
  deleteFavorites: () => {},
  isFavorite: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (id, name) => {
    setFavorites([...favorites, { id: id, name: name }]);
  };

  const deleteFavorites = (name) => {
    setFavorites(
      favorites.filter((elem) => {
        return elem.name != name;
      })
    );
  };

  const isFavorite = (id, name) => {
    return favorites.some((elem) => {
      return elem.id == id && elem.name == name;
    });
  };

  return (
    <FavoritesContext
      value={{ favorites, addFavorites, deleteFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext>
  );
};
