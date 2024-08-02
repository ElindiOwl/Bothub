import { DropdownMenu } from 'shared/ui';
import { useIdToHook } from 'shared/lib';
import { HEADER, ProductsList } from 'entities/Header';
import { ArrowSVG } from 'shared/assets';

import style from './Company-products-dropdown.module.scss';

export const CompanyProductsDropdown = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <ProductsList />;
	const menuName = 'CompanyProductsDropdown';

	if (!headerElement) {
		return null;
	}

	return (
		<DropdownMenu
			activeStyle={style.products_active}
			elementToHook={headerElement}
			inactiveStyle={style.products}
			listNodeToUse={listNode}
			menuName={menuName}
			shellContainerStyling={style.product__container}
			onMenuToggle={() => {
			}}>
			<p>Продукты</p>
			<ArrowSVG />
		</DropdownMenu>
	);
};
