import { Nullable } from '@/shared/types';
import { Select } from '@/shared/ui-kit';
import { TFilters } from './types';
import { FC } from 'react';
import { useGetOptions } from './hooks';

interface IFilterItem {
  value: Nullable<string>;
  name: TFilters;
  handleChangeFilter: (value: Nullable<string>, name: TFilters) => void;
  placeholder: string;
}

export const FilterItem: FC<IFilterItem> = ({ value, name, handleChangeFilter, placeholder }) => {
  const { options, isLoading } = useGetOptions(name);

  return (
    <Select
      value={value}
      onChange={(v) => handleChangeFilter(v, name)}
      placeholder={placeholder}
      loading={isLoading}
      options={options}
    />
  );
};
