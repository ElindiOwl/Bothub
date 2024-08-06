import { Button, DropdownMenu } from 'shared/ui';
import { HEADER } from 'entities/Header';
import { BurgerMenuSVG } from 'shared/assets';
import { useIdToHook, useMenu } from 'shared/model';
import { BurgerNavList } from 'widgets/Burger-nav-list';

import style from './Burger-navigation.module.scss';

export const BurgerNavigation = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <BurgerNavList />;
	const menuName = 'BurgerNavigation';
	const animationTimeOut = 100;
	const animationClasses = {
		enter: style.burgerNav__enter,
		enterActive: style.burgerNav__enter_active,
		exit: style.burgerNav_exit,
		exitActive: style.burgerNav__exit_active,
	};

	const { isMenuOpen, toggleMenu, menuRef } = useMenu(menuName);

	const handleClick = () => toggleMenu();

	const buttonNode = <BurgerMenuSVG isOpen={isMenuOpen} toggleMenu={handleClick} />;

	if (!headerElement) {
		return null;
	}

	return (
		<div ref={menuRef} className={style.burgerNav}>
			<DropdownMenu
				animationClasses={animationClasses}
				animationTimeout={animationTimeOut}
				disablePageScroll={true}
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