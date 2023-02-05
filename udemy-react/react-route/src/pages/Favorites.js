import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPages() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
    </section>
  );
}

export default FavoritesPages;
