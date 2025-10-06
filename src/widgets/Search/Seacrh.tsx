import { InputProps } from 'antd';

import { Input } from '@/shared/ui-kit';
import { ChangeEvent, FC, useTransition } from 'react';
import { SeacrhIcon } from '@/shared/assets/icons';

import styles from './Search.module.scss';
import { useSetUrlParams } from '@/shared/hooks';

export const Search: FC<InputProps> = (props) => {
  const { query, handleChange } = useSetUrlParams<string>({ param: 'search' });

  const [, startTransition] = useTransition();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      handleChange(value);
    });
  };

  return (
    <Input
      {...props}
      value={query}
      onChange={onChange}
      placeholder="Поиск"
      prefix={<SeacrhIcon className={styles.search_icon} />}
    />
  );
};
