import React, { ReactElement, useEffect } from 'react';
import { getMe } from 'src/services';

const Home: React.FC = (): ReactElement => {
  const getUser = async () => {
    try {
      const { data } = await getMe();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h4>つくばみらい 患者一覧</h4>
    </>
  );
};

export default Home;
