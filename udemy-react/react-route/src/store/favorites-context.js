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

  function addFavoriteHandler(favoriteMeetup) {
    userFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    return prevUserFavorites.filter((meetup) => {
      meetup.id !== meetupId;
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
