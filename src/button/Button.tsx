import react from 'react';

type ButtonThemeSelect = 'parimy' | 'normal' | 'success' | 'darnger' | 'error';

interface IProps {
  children?: react.ReactNode;
  theme?: ButtonThemeSelect;
}

const Button: React.FC<IProps> = (props) => {
  const theme = props.theme ?? 'normal';
  return <button className={theme}>{props.children}</button>;
};

export { Button, ButtonThemeSelect };
