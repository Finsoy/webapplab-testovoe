import { Input as InputAntd, InputProps } from 'antd';
import cx from 'classnames';

import styles from './Input.module.scss';
import { FC } from 'react';

export const Input: FC<InputProps> = ({ ...props }) => {
  return <InputAntd {...props} className={cx(styles.input)} />;
};
