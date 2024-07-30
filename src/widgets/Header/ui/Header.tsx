import { Button } from 'shared/ui';
import { HEADER, HeaderLogo } from 'entities/Header';
import { BurgerNavigation, LanguageSettings, RegularNavigation } from 'features/Header';


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
					<div className={style.header__button}>
						<Button additionalStyles={style.header__button_addition} text={'Авторизация'} />
					</div>
					<BurgerNavigation />
				</div>
			</nav>
		</div>
	);
};