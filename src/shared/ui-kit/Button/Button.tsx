import { FCC } from '@/shared/types';
import { Button as ButtonAntd, ButtonProps } from 'antd';
import cx from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonProps { }

export const Button: FCC<IButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonAntd {...props} type="primary" className={cx(styles.button)}>
      {children}
    </ButtonAntd>
  );
};
