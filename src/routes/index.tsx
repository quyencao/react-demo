import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login } from 'src/pages';
import { GlobalStyle } from 'src/styles/GlobalStyles';

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
