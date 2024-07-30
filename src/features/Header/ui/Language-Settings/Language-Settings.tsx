import { DropdownShell } from 'shared/ui';
import { cn, useMenu } from 'shared/lib';
import { HEADER, LanguageList } from 'entities/Header';
import { ArrowSVG, GlobeSVG } from 'shared/assets';

import style from './Language-Settings.module.scss';

export const LanguageSettings = () => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu();
	const headerElement = document.getElementById(HEADER);
	const listNode = <LanguageList />;

	return (
		<div ref={menuRef} className={style.langSettings}>
			<div className={cn([style.langSettings__button], { [style.langSettings__button_active]: isMenuOpen })}
				onClick={toggleMenu}>
				<div className={style.langSettings__globe}>
					<GlobeSVG />
				</div>
				<p className={style.langSettings__text}>RU</p>
				<div className={style.langSettings__arrow}>
					<ArrowSVG />
				</div>
			</div>
			{isMenuOpen && (
				<DropdownShell containerStyling={style.langSettings__dropdown}
					nodeToUse={listNode} portalElement={headerElement} toggleRef={menuRef} />
			)}
		</div>
	);
};