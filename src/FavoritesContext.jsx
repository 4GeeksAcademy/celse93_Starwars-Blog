import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorites: () => {},
  deleteFavorites: () => {},
  isFavorite: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (uid, name) => {
    setFavorites([...favorites, { uid: uid, name: name }]);
  };

  const deleteFavorites = (name) => {
    setFavorites(
      favorites.filter((elem) => {
        return (elem.name != name);
      })
    );
  };

  const isFavorite = (uid, name) => {
    return favorites.some((elem) => {
      return (elem.uid == uid && elem.name == name);
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
