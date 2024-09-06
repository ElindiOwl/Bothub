import { FC, ReactNode } from 'react';
import { cn } from 'shared/lib';

import style from './Animated-border.module.scss';

interface AnimatedBorderProps {
    children: ReactNode;
    animation: string;
    wrapper: string;
}

export const AnimatedBorder: FC<AnimatedBorderProps> = ({ children, animation, wrapper }) => {
	return (
		<div className={cn([style.animatedbg, animation, wrapper])}>
			{children}
		</div>
	);
};