import react from 'react';
import './index.scss';

type ButtonThemeSelect = 'parimy' | 'info' | 'success' | 'danger' | 'warning';

interface IProps {
  children?: react.ReactNode;
  theme?: ButtonThemeSelect;
}

const Button: React.FC<IProps> = (props) => {
  const classNames = `si-button ${props.theme ? `si-button-${props.theme}` : ''}`;
  return <button className={classNames}>{props.children}</button>;
};

export { Button, ButtonThemeSelect };
