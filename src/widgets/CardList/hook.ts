import { getCards } from '@/api/card';
import { ICard } from '@/entities/card';
import { useGetUrlParams } from '@/shared/hooks';
import { useEffect, useState } from 'react';

export const useCards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [isNext, setIsNext] = useState(false);

  const { category, city, sort, search } = useGetUrlParams({
    params: ['sort', 'category', 'city', 'search'],
  });

  const fetchCards = async (page: number, isInitial?: boolean) => {
    const { next, data } = await getCards({ category, city, search, sort, page });

    if (isInitial) {
      setCards(data);
    } else {
      setCards((prev) => [...prev, ...data]);
    }
    setIsNext(!!next);
  };

  useEffect(() => {
    fetchCards(1, true);
  }, [category, city, search, sort]);

  return {
    cards,
    isNext,
    fetchCards,
  };
};
