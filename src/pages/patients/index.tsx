import React, { ReactElement } from 'react';
import Title from './title';
import SearchTextbox from './search-textbox';
import Select from './select';
import Button from './button';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiSync } from '@mdi/js';

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
      <p className="mt-2"></p>
      <div style={{ width: '116px' }}>
        <Button color="primary">
          <Icon path={mdiPlus} size={0.95} vertical color="white" />
          <span>登録する</span>
        </Button>
        <p className="mt-2"></p>
        <Button color="secondary">
          <Icon path={mdiSync} size={0.95} vertical color="white" rotate={90} />
          <span>更新する</span>
        </Button>
      </div>
    </>
  );
};

export default Patients;
