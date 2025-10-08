import { InputProps } from 'antd';

import { Input } from '@/shared/ui-kit';
import { ChangeEvent, FC, useTransition, useEffect } from 'react';
import { SeacrhIcon } from '@/shared/assets/icons';
import { useDebounce, useSetUrlParams } from '@/shared/hooks';

import styles from './Search.module.scss';

export const Search: FC<InputProps> = (props) => {
  const { query, handleChange } = useSetUrlParams<string>({ param: 'search' });

  const [debouncedValue, value, setValue] = useDebounce(query ?? '', 300);

  const [, startTransition] = useTransition();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  useEffect(() => {
    startTransition(() => {
      handleChange(debouncedValue);
    });
  }, [debouncedValue, handleChange, startTransition]);

  return (
    <Input
      {...props}
      value={value}
      onChange={onChange}
      placeholder="Поиск"
      prefix={<SeacrhIcon className={styles.search_icon} />}
    />
  );
};
