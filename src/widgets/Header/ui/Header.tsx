import { HEADER, HeaderLogo } from 'entities/Header';
import { AuthorizationButton, BurgerNavigation, LanguageSettings, RegularNavigation } from 'features/Header';


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
					<AuthorizationButton />
					<BurgerNavigation />
				</div>
			</nav>
		</div>
	);
};