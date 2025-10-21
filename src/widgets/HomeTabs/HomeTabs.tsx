import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { CardList } from '../CardList';

import styles from './HomeTabs.module.scss';
import { useState } from 'react';

export const HomeTabs = () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleBack = () => setActiveKey('1');

  const tabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Все поставщики',
      children: <CardList />,
      destroyOnHidden: true,
    },
    {
      key: '2',
      label: 'Избранные',
      children: <CardList onlyFavorites onBack={handleBack} />,
      destroyOnHidden: true,
    },
  ];

  return (
    <Tabs
      activeKey={activeKey}
      onChange={setActiveKey}
      items={tabs}
      className={styles.tabs}
      tabBarGutter={24}
    />
  );
};
