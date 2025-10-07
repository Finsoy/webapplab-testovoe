import { PhoneIcon, WhatsAppIcon } from '@/shared/assets/icons';
import { Logo } from '../Header/Logo';

import styles from './Footer.module.scss';

export const Contacts = () => {
  return (
    <div>
      <Logo alwaysLight className={styles.logo} />

      <div className={styles.contacts}>
        <h3>Контакты</h3>
        <div className={styles.contact}>
          <WhatsAppIcon />
          <div className={styles.contact_item}>
            <span>Whats App</span>
            <span>+7 945-918-2135</span>
          </div>
        </div>
        <div className={styles.contact}>
          <PhoneIcon />
          <div className={styles.contact_item}>
            <span>Позвоните нам</span>
            <span>+7 945-918-2135</span>
          </div>
        </div>
      </div>
    </div>
  );
};
