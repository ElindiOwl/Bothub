import { FC, useState } from 'react';
import { AccordionTextProps, cn } from 'shared/lib';
import { ArrowSVG } from 'shared/assets';

import style from './Accordion-Header.module.scss';

interface AccordionHeaderProps extends AccordionTextProps {
    onClick: () => void;
    headerContainerClassName: string;
    arrowSVGClassName: string;
    headerContainerClassName_onClick: string;
    headerTextClassName: string;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
	text,
	onClick,
	headerContainerClassName,
	arrowSVGClassName,
	headerContainerClassName_onClick,
	headerTextClassName,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
		onClick();
	};

	return (
		<div
			className={cn(['', headerContainerClassName], {
				[headerContainerClassName_onClick]: isExpanded,
			})}
			onClick={handleClick}
		>
			<h2 className={cn(['', headerTextClassName])}>{text}</h2>
			<div className={style.headerContainer__svgContainer}>
				<div className={cn(
					[style.expand__title_arrow, arrowSVGClassName],
					{ [style.rotated]: isExpanded },
				)}>
					<ArrowSVG />
				</div>
			</div>
		</div>
	);
};
