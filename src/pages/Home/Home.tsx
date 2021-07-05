import React, { ReactElement, useEffect } from 'react';
import { Button, NavLink } from './../../components';
import { hello } from './../../services';

const Home: React.FC = (): ReactElement => {
  useEffect(() => {
    hello('hello')
      .then((res) => console.log(res.getStatus()))
      .catch((error) => console.log('errr', error));
  }, []);

  return (
    <div>
      <NavLink />
      <h1>Home</h1>
      <Button />
    </div>
  );
};

export default Home;
