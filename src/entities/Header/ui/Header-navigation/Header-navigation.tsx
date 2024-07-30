import { NavItem, navItems } from 'entities/Header';
import { FC } from 'react';

import style from './Header-navigation.module.scss';

interface HeaderNavigationProps {
    mapToUse: string[];
    styleToUse: string;
}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({ mapToUse, styleToUse }) => {
	return (
		<nav className={style.header__navigation}>
			{navItems.map(({ item, link, isExternal, isNode }, index) =>
				<div key={index}>
					<NavItem isExternal={isExternal} isNode={isNode} itemToUse={item} linkToUse={link} />
				</div>,
			)}
		</nav>
	);
};