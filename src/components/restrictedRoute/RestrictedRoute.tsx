import React, { useCallback, useLayoutEffect } from 'react';

import { Route, useHistory } from 'react-router-dom';

import { localStorageHelper } from 'src/utils';
import { IRoute } from 'src/routes/configs';

export interface IRestrictedRouteProps extends IRoute {
  isPrivate?: boolean;
}

const RestrictedRoute: React.FC<IRestrictedRouteProps> = ({
  children,
  restricted = false,
  isPrivate,
  layout: Layout,
  ...props
}) => {
  const history = useHistory();

  const redirect = useCallback(() => {
    if (isPrivate && !localStorageHelper.isLogin()) {
      history.replace('login');
    }
    if (restricted && localStorageHelper.isLogin()) {
      history.replace('/');
    }
  }, [isPrivate, history, restricted]);

  useLayoutEffect(() => {
    redirect();
  }, [redirect]);

  const Component = Layout ? <Layout>{children}</Layout> : children;

  return <Route {...props}>{Component}</Route>;
};

export default RestrictedRoute;
