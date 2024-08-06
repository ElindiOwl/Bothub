import { CustomAccordion } from 'shared/ui';
import { burgerMenuAccordionItems } from 'widgets/Header';

import style from './Company-products-accordion.module.scss';


export const CompanyProductsAccordion = () => {
	return (
		<CustomAccordion
			accordionDescriptionClassName={style.accordion__description}
			headerContainerClassName={style.accordion__header}
			headerContainerClassName_onClick={
				style.accordion__header_onClick
			}
			headerTextClassName={style.accordion__text}
			mapToUse={burgerMenuAccordionItems}
		/>
	);
};