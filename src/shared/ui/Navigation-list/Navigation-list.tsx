import { NavItem, NavLink } from 'entities/Header';
import { FC, ReactNode } from 'react';

interface NavigationListProps {
    linksToUse: NavLink[];
    styleToUse: string;
    nodesToUse?: ReactNode[];
}

export const NavigationList: FC<NavigationListProps> = ({ linksToUse, styleToUse, nodesToUse = [] }) => {
	return (
		<nav className={styleToUse}>
			{nodesToUse.map((node) => (
				<>{node}</>
			))}
			{linksToUse.map(({ item, link, isExternal }, index) =>
				<div key={index}>
					<NavItem isExternal={isExternal} itemToUse={item} linkToUse={link} />
				</div>,
			)}
		</nav>
	);
};