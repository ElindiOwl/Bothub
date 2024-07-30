import { Link } from 'react-router-dom';
import { FC, ReactNode } from 'react';

interface NavItemStates {
    isExternal: boolean;
    isNode: boolean;
}

interface NavItemProps extends NavItemStates {
    linkToUse: string,
    itemToUse: string | ReactNode
}

export const NavItem: FC<NavItemProps> = ({ linkToUse, itemToUse, isExternal, isNode }) => {
	if (isNode) return <>{itemToUse}</>;

	if (isExternal) return <a href={linkToUse}>{itemToUse}</a>;

	return <Link to={linkToUse}>{itemToUse}</Link>;
};


