import { BurgerMenuSVG } from 'shared/assets';
import { Button, DropdownShell, NavigationList } from 'shared/ui';
import { HEADER, navItems } from 'entities/Header';
import { useMenu } from 'shared/lib';
import { MouseEventHandler } from 'react';

import style from './Burger-menu.module.scss';


export const BurgerMenu = () => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu();
	const headerElement = document.getElementById(HEADER);
	const listNode = <NavigationList mapToUse={navItems} styleToUse={style.burger__list} />;

	const handleClickInside: MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation();
	};

	return (
		<div ref={menuRef} onClick={handleClickInside}>
			<Button additionalStyles={style.burger} text={<BurgerMenuSVG isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
				onClick={toggleMenu} />
			{isMenuOpen && (
				<DropdownShell containerStyling={style.burger__dropDown} nodeToUse={listNode}
					portalElement={headerElement} toggleRef={menuRef} />
			)}
		</div>
	);
};