import React, { ReactElement, useEffect } from 'react';
import { hello } from './../../services';
import { HighlightDate } from './../../components/Datepicker/HighlightDate';

const Home: React.FC = (): ReactElement => {
  useEffect(() => {
    hello('hello')
      .then((res) => console.log(res.getStatus()))
      .catch((error) => console.log('errr', error));
  }, []);

  return (
    <>
      <h4>つくばみらい 患者一覧</h4>
      <HighlightDate />
    </>
  );
};

export default Home;
