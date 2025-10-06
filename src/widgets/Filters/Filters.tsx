import { useGetFiters } from './hooks';
import { FILTERS } from './constants';
import { FilterItem } from './FilterItem';

export const Filters = () => {
  const { filters, handleChangeFilter } = useGetFiters();
  console.log('🚀 ~ filters:', filters);

  return (
    <section>
      {FILTERS.map(({ name, placeholder }) => (
        <FilterItem
          key={name}
          name={name}
          value={filters[name]}
          placeholder={placeholder}
          handleChangeFilter={handleChangeFilter}
        />
      ))}
    </section>
  );
};
