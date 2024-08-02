import { navComponents, navLinks } from 'entities/Header';
import { NavigationList } from 'shared/ui';

import style from './Regular-navigation.module.scss';

export const RegularNavigation = () => {
	return (
		<div className={style.regularNav}>
			<NavigationList linksToUse={navLinks} nodesToUse={navComponents}
				styleToUse={style.regularNav__links} />
		</div>
	);
};