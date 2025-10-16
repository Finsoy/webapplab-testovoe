import { updateCradFavorite } from '@/api/card';
import { ICard, ICardResponse } from '@/entities/card';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';

export const useFavoriteMutation = () => {
  const queryClient = useQueryClient();

  const updateFavoriteMutation = useMutation({
    mutationFn: (data: { id: number; isFavorite: boolean }) =>
      updateCradFavorite({ id: data.id, isFavorite: data.isFavorite }),
    onMutate: async ({ id, isFavorite }) => {
      // Cancel all card queries (this will match any query that starts with 'cards')
      await queryClient.cancelQueries({ queryKey: ['cards'] });

      // Get all the card queries
      const queries = queryClient.getQueriesData({ queryKey: ['cards'] });

      // Store previous data for rollback
      const previousData = queries.map(([queryKey, data]) => [queryKey, data]);

      // Update all card queries
      queries.forEach(([queryKey, data]) => {
        if (data && typeof data === 'object' && 'pages' in data) {
          const infiniteData = data as InfiniteData<ICardResponse, unknown>;

          queryClient.setQueryData(queryKey, {
            ...infiniteData,
            pages: infiniteData.pages.map((page) => ({
              ...page,
              data: page.data.map((card: ICard) =>
                card.id === id ? { ...card, isFavorite } : card,
              ),
            })),
          });
        }
      });

      console.log('222: ', queryClient.getQueriesData({ queryKey: ['cards'] }));

      return { previousData };
    },
    onError: (err, _, context) => {
      console.error('Failed to update favorite:', err);

      // Rollback all queries
      if (context?.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey as readonly unknown[], data);
        });
      }
    },
  });

  const handleFavorite = (id: number, isFavorite: boolean) => {
    updateFavoriteMutation.mutate({
      id,
      isFavorite,
    });
  };

  return { handleFavorite };
};
