import { FC, ReactNode, useState } from 'react';
import { cn } from 'shared/lib';

import styles from './Custom-checkbox.module.scss';

interface StylingProps {
    containerStyling: string,
    customCBStyling: string,
    checkedStyling: string,
    hoveredStyling: string,
    hoveredCheckedStyling: string,
}

interface CustomCheckboxProps extends StylingProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    svgToUse: ReactNode;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
	checked,
	onChange,
	svgToUse,
	customCBStyling,
	containerStyling,
	checkedStyling,
	hoveredStyling,
	hoveredCheckedStyling,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleCheckboxClick = () => {
		onChange(!checked);
	};

	return (
		<div className={containerStyling} onClick={handleCheckboxClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<input
				checked={checked}
				className={styles.checkbox_input}
				type="checkbox"
				onChange={() => {
				}}
			/>
			<span className={cn([customCBStyling], {
				[checkedStyling]: checked,
				[hoveredCheckedStyling]: isHovered && checked,
				[hoveredStyling]: isHovered,
			})}
			>
				{checked && (
					svgToUse
				)}
			</span>
		</div>
	);
};