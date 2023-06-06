import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Form, Detail, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route exact path="/detail/:recipeId" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
