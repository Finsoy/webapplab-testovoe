import { useGetFiters } from './hooks';
import { FILTERS } from './constants';
import { FilterItem } from './FilterItem';

import styles from './Filters.module.scss';

export const Filters = () => {
  const { filters, handleChangeFilter } = useGetFiters();

  return (
    <section className={styles.filters}>
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
