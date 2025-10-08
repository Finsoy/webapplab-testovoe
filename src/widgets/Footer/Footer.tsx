import { useSetUrlParams } from '@/shared/hooks';
import { useGetOptions } from '../Filters/hooks';
import { Contacts } from './Contacts';

import styles from './Footer.module.scss';
import { Links } from './Links';

const usefulLinks = [
  {
    label: 'О компании',
    value: 'about',
  },
  {
    label: 'Документы',
    value: 'documents',
  },
  {
    label: 'Частые вопросы',
    value: 'FAQ',
  },
];

export const Footer = () => {
  const categories = useGetOptions('category');

  const { handleChange } = useSetUrlParams();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <Contacts />
        <div className={styles.links}>
          <Links
            links={categories}
            onClick={handleChange}
            title="Категории"
            param="category"
            className={styles.links_categories}
          />
          <Links links={usefulLinks} title="Полезно" className={styles.links_useful} />
        </div>
      </div>
      <div className={styles.footer_rights}>© 2025 Все права защищены</div>
    </footer>
  );
};
