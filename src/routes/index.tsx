import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login } from './../pages';
import Layout from '../layouts/main';

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Layout>
            <Route path="/" exact component={Home} />
          </Layout>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
