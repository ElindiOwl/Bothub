import { Button, DropdownMenu, NavigationList } from 'shared/ui';
import { HEADER, navItems } from 'entities/Header';
import { BurgerMenuSVG } from 'shared/assets';
import { useMenu } from 'shared/lib';

import style from './Burger-navigation.module.scss';

export const BurgerNavigation = () => {
	const { isMenuOpen, toggleMenu } = useMenu();
	const headerElement = document.getElementById(HEADER);
	const listNode = <NavigationList mapToUse={navItems} styleToUse={style.burgerNav__list} />;
	const buttonNode = <BurgerMenuSVG isOpen={isMenuOpen} toggleMenu={toggleMenu} />;

	return (
		<div className={style.burgerNav}>
			<DropdownMenu elementToHook={headerElement}
				listNodeToUse={listNode}
				shellContainerStyling={style.burgerNav__dropDown}>
				<Button additionalStyles={style.burgerNav__button}
					text={buttonNode}
					onClick={toggleMenu}
				/>
			</DropdownMenu>
		</div>
	);
};