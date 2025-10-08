import { getCards } from '@/api/card';
import { ICard } from '@/entities/card';
import { useGetUrlParams } from '@/shared/hooks';
import { useEffect, useState } from 'react';

export const useCards = () => {
  const [cards, setCards] = useState<ICard[]>();

  const { category, city, sort, search } = useGetUrlParams({
    params: ['sort', 'category', 'city', 'search'],
  });

  useEffect(() => {
    const fetchCards = async () => {
      setCards(await getCards({ category, city, search, sort }));
    };

    fetchCards();
  }, [category, city, search, sort]);

  return {
    cards,
  };
};
