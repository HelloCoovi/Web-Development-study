import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorite: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(porps) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
