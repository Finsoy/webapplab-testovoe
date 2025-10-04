import { Select as SelectAntd, type SelectProps } from 'antd';
import { FC, useState } from 'react';
import cx from 'classnames';

import styles from './Select.module.scss';
import { SelectedArrowIcon, CheckmarkIcon } from '@/shared/assets/icons';

type ISelectProps = Omit<SelectProps, 'open' | 'onOpenChange' | 'onSelect'>;

export const Select: FC<ISelectProps> = ({ className, value, onChange, ...props }) => {
  const [open, setOpen] = useState(props.defaultOpen || false);

  const menuItemSelectedIcon = props.menuItemSelectedIcon || <CheckmarkIcon />;
  const suffixIcon = props.suffixIcon || (
    <SelectedArrowIcon className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`} />
  );

  const handleSelect = (val: string | null) => {
    if (val === value) {
      onChange?.(null);
      return;
    }
    onChange?.(val);
  };

  return (
    <SelectAntd
      {...props}
      open={open}
      value={value}
      className={cx(styles.select, className, {
        [styles.select_active]: !!value,
      })}
      onOpenChange={(visible) => setOpen(visible)}
      onChange={onChange}
      onSelect={handleSelect}
      menuItemSelectedIcon={menuItemSelectedIcon}
      suffixIcon={suffixIcon}
    />
  );
};
