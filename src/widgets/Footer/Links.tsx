import { FC } from 'react';
import { IOption } from '@/api/filters';
import { Nullable } from '@/shared/types';

import cx from 'classnames';
import styles from './Footer.module.scss';
import { FooterLinksSkeleton } from './Skeleton';

interface ILinks {
  links: IOption[];
  title: string;
  className?: string;
  onClick?: (value: Nullable<string>, param?: string) => void;
  param?: string;
  isLoading?: boolean;
}

export const Links: FC<ILinks> = ({ links, title, className, onClick, param, isLoading }) => {
  if (isLoading) {
    return <FooterLinksSkeleton />;
  }

  return (
    <div className={cx(styles.links_link, className)}>
      <h3 className={styles.links_title}>{title}</h3>
      <ul className={styles.links_link_list}>
        {links.map((link) => (
          <li key={link.value} onClick={() => onClick?.(link.value, param)}>
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
