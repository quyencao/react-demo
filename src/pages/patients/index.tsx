import React, { ReactElement } from 'react';
import Title from './title';
import SearchTextbox from './search-textbox';
import Select from './select';

const options = [
  { value: 'all', label: '全て' },
  { value: '1', label: '入力済み' },
  { value: '2', label: '未入力' },
  { value: '3', label: '更新あり' },
];

const Patients: React.FC = (): ReactElement => {
  return (
    <>
      <Title>つくばみらい 患者一覧</Title>
      <SearchTextbox placeholder="患者名を検索" />
      <p className="mt-2"></p>
      <Select
        options={options}
        isSearchable={false}
        defaultValue={{ value: 'all', label: '全て' }}
      />
    </>
  );
};

export default Patients;
