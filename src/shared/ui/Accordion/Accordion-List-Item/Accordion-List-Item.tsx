import { FC, ReactNode, useState } from 'react';
import { cn } from 'shared/lib/classNames.ts';
import { AccordionDescription, AccordionHeader } from 'shared/ui';

import style from './Accordion-List-Item.module.scss';

export interface AccordionListProps {
    header: string | ReactNode;
    description: string | ReactNode;
    containerClassName: string;
    headerContainerClassName: string;
    arrowSVGClassName: string;
    headerContainerClassName_onClick: string;
    accordionDescriptionClassName: string;
    headerTextClassName: string;
}

export const AccordionListItem: FC<AccordionListProps> = ({
	header,
	description,
	containerClassName,
	headerContainerClassName,
	arrowSVGClassName,
	headerContainerClassName_onClick,
	accordionDescriptionClassName,
	headerTextClassName,
}) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

	const headerClickHandler = () => {
		setIsDescriptionVisible(!isDescriptionVisible);
	};

	return (
		<div className={cn(['', containerClassName])}>
			<AccordionHeader
				arrowSVGClassName={arrowSVGClassName}
				headerContainerClassName={headerContainerClassName}
				headerContainerClassName_onClick={
					headerContainerClassName_onClick
				}
				headerTextClassName={headerTextClassName}
				text={header}
				onClick={headerClickHandler} />
			<div
				className={cn([style.accordion__description], {
					[style.accordion__description_invisible]:
                        !isDescriptionVisible,
				})}
			>
				<AccordionDescription
					accordionDescriptionClassName={
						accordionDescriptionClassName
					}
					text={description}
				/>
			</div>
		</div>
	);
};
