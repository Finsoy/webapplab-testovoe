import { TFilters } from '../types';
import { getFitlerOptions } from '@/api/filters';
import { useQuery } from '@tanstack/react-query';

export const useGetOptions = (name: TFilters) => {
  const {
    data: options,
    isLoading,
    error,
  } = useQuery({
    queryKey: [name],
    queryFn: () => getFitlerOptions(name),
  });

  return { options, isLoading, error };
};
