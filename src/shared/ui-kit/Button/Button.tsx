import { FCC } from '@/shared/types';
import { Button as ButtonAntd, ButtonProps } from 'antd';
import cx from 'classnames';

import styles from './Button.module.scss';

export const Button: FCC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonAntd {...props} type="primary" className={cx(styles.button)}>
      {children}
    </ButtonAntd>
  );
};
