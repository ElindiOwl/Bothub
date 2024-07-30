import { cn } from 'shared/lib';

import style from './Burger-menu.module.scss';

export const BurgerMenuSVG = ({ isOpen, toggleMenu }) => {

	return (
		<svg className={cn([], { [style.open]: isOpen })} fill="none" height="18" viewBox="0 0 18 18"
			width="18" onClick={toggleMenu}>
			<path className={cn([style.line, style.line1])} d="M2 4.5L16 4.5" stroke="#fff" strokeLinecap="round"
				strokeWidth="2"></path>
			<path className={cn([style.line, style.line2])} d="M2 8.5L16 8.5" stroke="#fff" strokeLinecap="round"
				strokeWidth="2"></path>
			<path className={cn([style.line, style.line3])} d="M2 12.5L16 12.5" stroke="#fff" strokeLinecap="round"
				strokeWidth="2"></path>
		</svg>
	);
};
