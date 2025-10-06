import { useGetUrlParams } from '@/shared/hooks';
import { TFilters } from '../types';
import { FILTER_NAMES } from '../constants';

export const useGetInitialFilters = () => {
  const initialValues = useGetUrlParams<TFilters>({ params: FILTER_NAMES });
  return initialValues;
};
