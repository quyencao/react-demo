import React from 'react';

import { RouteProps } from 'react-router-dom';

import { Home, Login } from 'src/pages';
import MainLayout from 'src/layouts/mainLayout';

export interface IRoute extends RouteProps {
  restricted?: boolean;
  layout?: React.ComponentType;
}

interface IConfigRoutes {
  appRoutes: IRoute[];
  isPrivate?: boolean;
  layout?: React.ComponentType;
}

const privateRoutes: IRoute[] = [
  {
    children: <Home />,
    path: '/',
    layout: MainLayout,
  },
];

const publicRoutes: IRoute[] = [
  {
    children: <Login />,
    path: '/login',
    layout: MainLayout,
    restricted: true,
  },
];

export const configRoutes: IConfigRoutes[] = [
  {
    appRoutes: privateRoutes,
    isPrivate: true,
    layout: MainLayout,
  },
  {
    appRoutes: publicRoutes,
    layout: MainLayout,
  },
];
