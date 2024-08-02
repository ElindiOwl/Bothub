import { FC } from 'react';
import { AccordionMap } from 'shared/lib';
import { AccordionListItem } from 'shared/ui';

interface QuestionsAccordionProps {
    mapToUse: AccordionMap;
    containerClassName?: string;
    headerContainerClassName?: string;
    arrowSVGClassName?: string;
    headerContainerClassName_onClick?: string;
    accordionDescriptionClassName?: string;
    headerTextClassName?: string;
}

export const CustomAccordion: FC<QuestionsAccordionProps> = ({
	mapToUse,
	containerClassName = '',
	headerContainerClassName = '',
	arrowSVGClassName = '',
	headerContainerClassName_onClick = '',
	accordionDescriptionClassName = '',
	headerTextClassName = '',
}) => {
	return (
		<>
			{Object.entries(mapToUse).map(([key, question]) => (
				<AccordionListItem
					key={key}
					accordionDescriptionClassName={
						accordionDescriptionClassName
					}
					arrowSVGClassName={arrowSVGClassName}
					containerClassName={containerClassName}
					description={question.description}
					header={question.header}
					headerContainerClassName={headerContainerClassName}
					headerContainerClassName_onClick={
						headerContainerClassName_onClick
					}
					headerTextClassName={headerTextClassName} />
			))}
		</>
	);
};
