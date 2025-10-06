import { api } from './axios';

export interface IOption {
  value: string;
  label: string;
}

export const getFitlerOptions = async (filterName: string): Promise<IOption[]> => {
  const res = await api.get(filterName);
  return res.data;
};
