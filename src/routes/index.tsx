import React, { ReactElement, Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { configRoutes } from './configs';
import { GlobalStyle } from 'src/styles/GlobalStyles';
import RestrictedRoute from 'src/components/restrictedRoute';

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        {configRoutes.map(({ appRoutes, isPrivate, layout: MainLayout }) => {
          return appRoutes.map(({ children, path, layout, ...props }, idx) => {
            return (
              <RestrictedRoute
                key={idx}
                exact
                isPrivate={isPrivate}
                path={path}
                layout={layout || MainLayout}
                {...props}>
                {children}
              </RestrictedRoute>
            );
          });
        })}
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
