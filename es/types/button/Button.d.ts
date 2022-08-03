import react from 'react';
import './index.scss';
declare type ButtonThemeSelect = 'parimy' | 'info' | 'success' | 'danger' | 'warning';
interface IProps {
    children?: react.ReactNode;
    theme?: ButtonThemeSelect;
}
declare const Button: React.FC<IProps>;
export { Button, ButtonThemeSelect };
