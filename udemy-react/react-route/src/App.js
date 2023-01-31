import { Route, Switch } from "react-router-dom";
import AllMeetupsPages from "./pages/AllMeetups";
import FavoritesPages from "./pages/Favorites";
import NewMeetupsPages from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPages />
        </Route>
        <Route path="/favorites">
          <FavoritesPages />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
