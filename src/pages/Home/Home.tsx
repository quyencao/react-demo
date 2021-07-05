import React, { ReactElement } from 'react';
import { Button, NavLink } from './../../components';

const Home: React.FC = (): ReactElement => {
  return (
    <div>
      <NavLink />
      <h1>Home</h1>
      <Button />
    </div>
  );
};

export default Home;
