import { Button, DropdownMenu, NavigationList } from 'shared/ui';
import { HEADER, navLinks } from 'entities/Header';
import { BurgerMenuSVG } from 'shared/assets';
import { useIdToHook, useMenu } from 'shared/lib';
import { CompanyProductsAccordion } from 'features/Header';

import style from './Burger-navigation.module.scss';

export const BurgerNavigation = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <NavigationList linksToUse={navLinks} nodesToUse={[<CompanyProductsAccordion />]}
		styleToUse={style.burgerNav__list} />;
	const menuName = 'BurgerNavigation';

	const { isMenuOpen, toggleMenu, menuRef } = useMenu(menuName);

	const handleClick = () => toggleMenu();

	const buttonNode = <BurgerMenuSVG isOpen={isMenuOpen} toggleMenu={handleClick} />;

	if (!headerElement) {
		return null;
	}

	return (
		<div ref={menuRef} className={style.burgerNav}>
			<DropdownMenu
				elementToHook={headerElement}
				listNodeToUse={listNode}
				menuName={menuName}
				shellContainerStyling={style.burgerNav__dropDown}
				onMenuToggle={() => {
				}}>
				<Button
					additionalStyles={style.burgerNav__button}
					text={buttonNode}
					onClick={handleClick}
				/>
			</DropdownMenu>
		</div>
	);
};