import { Link } from 'react-router-dom';
import { FC } from 'react';

interface NavItemStates {
    isExternal: boolean;
}

interface NavItemProps extends NavItemStates {
    linkToUse: string,
    itemToUse: string
}

export const NavItem: FC<NavItemProps> = ({ linkToUse, itemToUse, isExternal }) => {
	if (isExternal) return <a href={linkToUse}>{itemToUse}</a>;
	return <Link to={linkToUse}>{itemToUse}</Link>;
};


