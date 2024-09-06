import { FC, ReactNode } from 'react';
import { cn } from 'shared/lib';

import style from './Button.module.scss';

interface ButtonTextProps {
    text: string | ReactNode,
    additionalStyles?: string
}

interface ButtonProps extends ButtonTextProps {
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<ButtonProps> = ({ text, additionalStyles = '', onClick, type = undefined }) => {
	return (
		<button className={cn([style.primaryButton, additionalStyles])} type={type} onClick={onClick}>{text}</button>
	);
};