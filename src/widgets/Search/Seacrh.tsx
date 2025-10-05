import { InputProps } from 'antd';

import { Input } from '@/shared/ui-kit';
import { ChangeEvent, FC, useTransition } from 'react';
import { SeacrhIcon } from '@/shared/assets/icons';
import { useSearchParams } from 'react-router';

import styles from './Search.module.scss';

export const Search: FC<InputProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const [, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchParams(value ? { search: value } : {});
    });
  };

  return (
    <Input
      {...props}
      value={query}
      onChange={handleChange}
      placeholder="Поиск"
      prefix={<SeacrhIcon className={styles.search_icon} />}
    />
  );
};
