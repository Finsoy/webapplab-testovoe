import { getCards } from '@/api/card';
import { useGetUrlParams } from '@/shared/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useCards = (onlyFavorites?: boolean) => {
  const { category, city, sort, search } = useGetUrlParams({
    params: ['sort', 'category', 'city', 'search'],
  });

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ['cards', { sort, city, category, search, onlyFavorites }],
      queryFn: ({ pageParam = 1 }) =>
        getCards({ sort, city, category, search, page: pageParam, onlyFavorites }),
      getNextPageParam: (lastPage) => lastPage.next,
      initialPageParam: 1,
    });

  const cards = data?.pages.flatMap((page) => page.data) ?? [];

  const fetchNext = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    cards,
    hasNextPage,
    fetchNext,
    isLoading,
    error,
    isFetchingNextPage,
    refetch,
  };
};
