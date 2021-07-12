import React, { ReactElement, useEffect } from 'react';
import { hello } from './../../services';

const Home: React.FC = (): ReactElement => {
  useEffect(() => {
    hello('hello')
      .then((res) => console.log(res.getStatus()))
      .catch((error) => console.log('errr', error));
  }, []);

  return (
    <>
      <h4>つくばみらい 患者一覧</h4>
    </>
  );
};

export default Home;
