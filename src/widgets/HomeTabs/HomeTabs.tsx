import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { CardList } from '../CardList';

import styles from './HomeTabs.module.scss';

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
    children: <CardList onlyFavorites />,
    destroyOnHidden: true,
  },
];

export const HomeTabs = () => {
  return <Tabs defaultActiveKey="1" items={tabs} className={styles.tabs} tabBarGutter={24} />;
};
