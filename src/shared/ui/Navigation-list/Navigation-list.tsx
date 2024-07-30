import { NavItem } from 'entities/Header';
import { FC } from 'react';

interface NavigationListProps {
    mapToUse: string[];
    styleToUse: string;
}

export const NavigationList: FC<NavigationListProps> = ({ mapToUse, styleToUse }) => {
	return (
		<nav className={styleToUse}>
			{mapToUse.map(({ item, link, isExternal, isNode }, index) =>
				<div key={index}>
					<NavItem isExternal={isExternal} isNode={isNode} itemToUse={item} linkToUse={link} />
				</div>,
			)}
		</nav>
	);
};