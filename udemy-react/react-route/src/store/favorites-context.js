import { createContext } from "react";

const FavoritesContext = createContext({
  favorite: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(porps) {
  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
}
