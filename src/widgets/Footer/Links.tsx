import { FC } from 'react';
import cx from 'classnames';

import styles from './Footer.module.scss';

interface ILinks {
  links: string[];
  title: string;
  className?: string;
}

export const Links: FC<ILinks> = ({ links, title, className }) => {
  return (
    <div className={cx(styles.links_link, className)}>
      <h3 className={styles.links_title}>{title}</h3>
      <ul className={styles.links_link_list}>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </div>
  );
};
