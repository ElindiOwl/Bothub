import { FC, ReactNode } from 'react';
import { cn } from 'shared/lib';

import style from './Button.module.scss';

interface ButtonTextProps {
    text: string | ReactNode,
    additionalStyles?: string
}

interface ButtonProps extends ButtonTextProps {
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ text, additionalStyles, onClick }) => {
	return (
		<button className={cn([style.primaryButton, additionalStyles])} onClick={onClick}>{text}</button>
	);
};