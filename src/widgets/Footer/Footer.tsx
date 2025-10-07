import { useGetOptions } from '../Filters/hooks';
import { Contacts } from './Contacts';

import styles from './Footer.module.scss';
import { Links } from './Links';

export const Footer = () => {
  const categories = useGetOptions('category');
  const categoriesLabel = categories.map((cat) => cat.label);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <Contacts />
        <div className={styles.links}>
          <Links links={categoriesLabel} title="Категории" className={styles.links_categories} />
          <Links links={categoriesLabel} title="Полезно" className={styles.links_useful} />
        </div>
      </div>
      <div className={styles.footer_rights}>© 2025 Все права защищены</div>
    </footer>
  );
};
