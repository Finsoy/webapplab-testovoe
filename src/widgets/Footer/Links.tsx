import { FC } from 'react';
import cx from 'classnames';
import { IOption } from '@/api/filters';
import { Nullable } from '@/shared/types';

import styles from './Footer.module.scss';

interface ILinks {
  links: IOption[];
  title: string;
  className?: string;
  onClick?: (value: Nullable<string>, param?: string) => void;
  param?: string;
}

export const Links: FC<ILinks> = ({ links, title, className, onClick, param }) => {
  return (
    <div className={cx(styles.links_link, className)}>
      <h3 className={styles.links_title}>{title}</h3>
      <ul className={styles.links_link_list}>
        {links.map((link) => (
          <li onClick={() => onClick?.(link.value, param)}>{link.label}</li>
        ))}
      </ul>
    </div>
  );
};
