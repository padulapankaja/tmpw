import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import Pricing from "./views/pricing";
import Questions from "./views/questions";
import RegDashbord from "./views/regDashbord";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" name="Home" component={Home} exact={true} />
        <Route
          path="/pricing"
          name="Pricing"
          component={Pricing}
          exact={true}
        />
        <Route
          path="/questions"
          name="Questions"
          component={Questions}
          exact={true}
        />
        <Route
          path="/Dashboard"
          name="Dashboard"
          component={RegDashbord}
          exact={true}
        />
      </Switch>
    </Router>
  );
}

export default App;
