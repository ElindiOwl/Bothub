import { DropdownMenu } from 'shared/ui';
import { useIdToHook } from 'shared/lib';
import { HEADER, LanguageList } from 'entities/Header';
import { ArrowSVG, GlobeSVG } from 'shared/assets';

import style from './Language-Settings.module.scss';

export const LanguageSettings = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <LanguageList />;
	const menuName = 'LanguageSettings';

	if (!headerElement) {
		return null;
	}

	return (
		<DropdownMenu
			activeStyle={style.langSettings__button_active}
			elementToHook={headerElement}
			inactiveStyle={style.langSettings__button}
			listNodeToUse={listNode}
			menuName={menuName}
			shellContainerStyling={style.langSettings__dropdown}
			onMenuToggle={() => {
			}}>
			<div className={style.langSettings__globe}>
				<GlobeSVG />
			</div>
			<p className={style.langSettings__text}>RU</p>
			<div className={style.langSettings__arrow}>
				<ArrowSVG />
			</div>
		</DropdownMenu>
	);
};
