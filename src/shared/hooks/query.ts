import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Nullable } from '../types';

interface IUseUrlParams {
  param?: string;
}

interface IUseGetUrlParams<Keys> {
  params: Keys[];
}

export const useSetUrlParams = <T extends string = string>(payload?: IUseUrlParams) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = payload?.param as string;

  const query = searchParams.get(param) || '';

  const handleChange = useCallback(
    (value: Nullable<T>, parameter?: T) => {
      const currentParams = new URLSearchParams(searchParams);

      const key = param ?? parameter;
      if (!key) return;

      if (value) {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }

      setSearchParams(currentParams);
    },
    [param, searchParams, setSearchParams],
  );

  return {
    query,
    handleChange,
  };
};

export const useGetUrlParams = <Keys extends string = string>({
  params,
}: IUseGetUrlParams<Keys>) => {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    return params.reduce(
      (acc, val) => {
        const query = searchParams.get(val) || null;

        acc[val] = query;
        return acc;
      },
      {} as Record<Keys, Nullable<string>>,
    );
  }, [params, searchParams]);
};
