import { NavItem, NavLink } from 'entities/Header';
import { FC, ReactNode } from 'react';

interface NavigationListProps {
    linksToUse: NavLink[];
    styleToUse: string;
    nodesAboveList?: ReactNode[];
    nodesBelowList?: ReactNode[];
}

export const NavigationList: FC<NavigationListProps> = ({
	linksToUse,
	styleToUse,
	nodesAboveList = [],
	nodesBelowList = [],
}) => {
	return (
		<nav className={styleToUse}>
			{nodesAboveList.map((node) => (
				<>{node}</>
			))}
			{linksToUse.map(({ item, link, isExternal }, index) =>
				<div key={index}>
					<NavItem isExternal={isExternal} itemToUse={item} linkToUse={link} />
				</div>,
			)}
			{nodesBelowList.map((node) => (
				<>{node}</>
			))}
		</nav>
	);
};