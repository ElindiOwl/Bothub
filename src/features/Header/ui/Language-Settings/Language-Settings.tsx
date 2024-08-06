import { DropdownMenu } from 'shared/ui';
import { HEADER, LanguageList } from 'entities/Header';
import { ArrowSVG, GlobeSVG } from 'shared/assets';
import { useIdToHook } from 'shared/model';

import style from './Language-Settings.module.scss';

export const LanguageSettings = () => {
	const headerElement = useIdToHook(HEADER);
	const listNode = <LanguageList />;
	const menuName = 'LanguageSettings';
	const animationTimeOut = 100;
	const animationClasses = {
		enter: style.langSettings__enter,
		enterActive: style.langSettings__enter_active,
		exit: style.langSettings__exit,
		exitActive: style.langSettings__exit_active,
	};

	if (!headerElement) {
		return null;
	}

	return (
		<DropdownMenu
			activeStyle={style.langSettings_active}
			animationClasses={animationClasses}
			animationTimeout={animationTimeOut}
			elementToHook={headerElement}
			inactiveStyle={style.langSettings}
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
