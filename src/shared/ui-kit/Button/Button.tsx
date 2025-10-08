import { FCC } from '@/shared/types';
import { Button as ButtonAntd, ButtonProps } from 'antd';
import cx from 'classnames';

import styles from './Button.module.scss';

export const Button: FCC<ButtonProps> = ({ children, type = 'primary', ...props }) => {
  return (
    <ButtonAntd {...props} type={type} className={cx(styles.button)}>
      {children}
    </ButtonAntd>
  );
};
