import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/home";
import PokePage from "./pages/pokemonPage";
import PokedexPage from "./pages/pokedexPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/Pokemon">
          <PokePage />
        </Route>
        <Route path="/Pokedex">
          <PokedexPage />
        </Route>
      </Switch>
  </Router>
}

export default App;
