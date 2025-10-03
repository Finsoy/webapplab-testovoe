import { FCC } from '@/shared/types';
import { Button as ButtonAntd, ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps { }

export const Button: FCC<IButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonAntd type="primary" {...props}>
      {children}
    </ButtonAntd>
  );
};
