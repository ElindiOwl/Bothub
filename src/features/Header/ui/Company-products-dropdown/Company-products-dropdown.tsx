import { DropdownMenu } from 'shared/ui';
import { HEADER, ProductsList } from 'entities/Header';
import { ArrowSVG } from 'shared/assets';
import { useIdToHook } from 'shared/model';

import style from './Company-products-dropdown.module.scss';

export const CompanyProductsDropdown = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <ProductsList />;
	const menuName = 'CompanyProductsDropdown';
	const animationTimeOut = 100;
	const animationClasses = {
		enter: style.products__enter,
		enterActive: style.products__enter_active,
		exit: style.products__exit,
		exitActive: style.products__exit_active,
	};

	if (!headerElement) {
		return null;
	}

	return (
		<DropdownMenu
			activeStyle={style.products_active}
			animationClasses={animationClasses}
			animationTimeout={animationTimeOut}
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
