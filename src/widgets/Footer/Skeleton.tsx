import styles from './Footer.module.scss';
import { Skeleton } from 'antd';

export const FooterLinksSkeleton = () => {
  return (
    <div className={styles.links_link}>
      <Skeleton.Input
        active
        style={{ backgroundColor: 'var(--text-secondary)', borderRadius: 16, width: 220 }}
        size="small"
      />
      {Array.from(new Array(5)).map(() => (
        <Skeleton.Input
          active
          style={{ backgroundColor: 'var(--text-secondary)', borderRadius: 16 }}
          size="small"
        />
      ))}
    </div>
  );
};
