import { Route, Switch } from "react-router-dom";
import AllMeetupsPages from "./pages/AllMeetups";
import FavoritesPages from "./pages/Favorites";
import NewMeetupsPages from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
