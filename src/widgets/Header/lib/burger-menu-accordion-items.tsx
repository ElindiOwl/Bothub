import { AccordionMap } from 'shared/lib';
import { ProductsList } from 'entities/Header';

export const burgerMenuAccordionItems: AccordionMap = {
	item1: {
		description: (
			<ProductsList />
		),
		header: (
			<p>
                Продукты
			</p>
		),
	},
};