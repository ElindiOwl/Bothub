import { CheckMarkSVG } from 'shared/assets';
import { CustomCheckbox } from 'shared/ui';
import { FC } from 'react';

import style from './Chat-checkbox.module.scss';

interface ChatCheckboxProps {
    isChecked: boolean;
    onChange: (checked: boolean) => void;
}

export const ChatCheckbox: FC<ChatCheckboxProps> = ({ isChecked, onChange }) => {

	return (
		<CustomCheckbox
			checked={isChecked}
			checkedStyling={style.checked}
			containerStyling={style.checkbox}
			customCBStyling={style.checkbox__custom}
			hoveredCheckedStyling={style.hoveredChecked}
			hoveredStyling={style.hovered}
			svgToUse={<CheckMarkSVG />}
			onChange={onChange}
		/>
	);
};