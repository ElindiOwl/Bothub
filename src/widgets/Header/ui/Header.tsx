import { HEADER, HeaderLogo, RegularNavigation } from 'entities/Header';
import { BurgerNavigation, LanguageSettings } from 'features/Header';
import { Button } from 'shared/ui';

import style from './Header.module.scss';

export const Header = () => {

	return (
		<div className={style.header}>
			<div className={style.header__anchor} id={HEADER}></div>
			<nav className={style.header__content}>
				<div className={style.header__navigation}>
					<HeaderLogo />
					<RegularNavigation />
				</div>
				<div className={style.header__options}>
					<LanguageSettings />
					<Button additionalStyles={style.header__auth} text={'Авторизация'} />
					<BurgerNavigation />
				</div>
			</nav>
		</div>
	);
};