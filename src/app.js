import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <Link to="/">
            <h1>Adopt me!</h1>
          </Link>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>

            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
