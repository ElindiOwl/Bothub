import { DropdownMenu } from 'shared/ui';
import { cn, useMenu } from 'shared/lib';
import { HEADER, ProductsList } from 'entities/Header';
import { ArrowSVG } from 'shared/assets';

import style from './Company-products.module.scss';

export const CompanyProducts = () => {
	const { isMenuOpen, toggleMenu } = useMenu();
	const headerElement = document.getElementById(HEADER);
	const listNode = <ProductsList />;

	return (
		<DropdownMenu elementToHook={headerElement} listNodeToUse={listNode}
			shellContainerStyling={style.product__container}>
			<div className={cn([style.products], { [style.products_active]: isMenuOpen })} onClick={toggleMenu}>
				<p>Продукты</p>
				<ArrowSVG />
			</div>
		</DropdownMenu>
	)
	;
};