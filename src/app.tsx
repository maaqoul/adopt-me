import React, {
  StrictMode,
  useState,
  lazy,
  Suspense,
  FunctionComponent,
} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
const App: FunctionComponent = () => {
  const theme = useState("darkBlue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <Suspense fallback={<h2>loading _</h2>}>
            <Router>
              <header>
                <Link to="/">
                  <h1>Adopt Me!</h1>
                </Link>
              </header>
              <Switch>
                <Route path="/details/:id">
                  <Details />
                </Route>
                <Route path="/">
                  <SearchParams />
                </Route>
              </Switch>
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
