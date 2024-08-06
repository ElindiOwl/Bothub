import { CompanyProductsAccordion } from 'entities/Header';
import { Button, NavigationList } from 'shared/ui';

import { burgerNavLinks } from '../lib/burger-nav-links.ts';

import style from './Burger-nav-list.module.scss';

export const BurgerNavList = () => {
	return (
		<>
			<NavigationList linksToUse={burgerNavLinks} nodesAboveList={[<CompanyProductsAccordion />]}
				nodesBelowList={[<Button additionalStyles={style.burgerNavList__button}
					text={'Авторизация'} />]}
				styleToUse={style.burgerNavList} />
		</>
	);
};