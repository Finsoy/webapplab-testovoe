import { Select as SelectAntd, type SelectProps } from 'antd';
import { FC, useState } from 'react';

import styles from './Select.module.scss';
import { SelectedArrowIcon, CheckmarkIcon } from '@/shared/assets/icons';

type ISelectProps = Omit<SelectProps, 'open' | 'onOpenChange' | 'onSelect'>;

export const Select: FC<ISelectProps> = ({ className, ...props }) => {
  const [open, setOpen] = useState(props.defaultOpen || false);
  const [value, setValue] = useState<string | null>(props.value || null);

  const menuItemSelectedIcon = props.menuItemSelectedIcon || <CheckmarkIcon />;
  const suffixIcon = props.suffixIcon || (
    <SelectedArrowIcon className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`} />
  );

  const handleSelect = (val: string | null) => {
    if (val === value) {
      return setValue(null);
    }
    setValue(val);
  };

  return (
    <SelectAntd
      {...props}
      open={open}
      value={value}
      className={`${styles.select} ${className}`}
      onOpenChange={(visible) => setOpen(visible)}
      onSelect={handleSelect}
      menuItemSelectedIcon={menuItemSelectedIcon}
      suffixIcon={suffixIcon}
    />
  );
};
