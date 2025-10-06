import { useState, useEffect } from 'react';
import { TFilters } from '../types';
import { getFitlerOptions, IOption } from '@/api/filters';

export const useGetOptions = (name: TFilters) => {
  const [options, setOptions] = useState<IOption[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const data = await getFitlerOptions(name);
      setOptions(data);
    };

    fetchOptions();
  }, [name]);

  return options;
};
