import { FC } from 'react';
import { AccordionTextProps } from 'shared/lib';

interface AccordionDescriptionProps extends AccordionTextProps {
	accordionDescriptionClassName: string;
}

export const AccordionDescription: FC<AccordionDescriptionProps> = ({
	text,
	accordionDescriptionClassName,
}) => {
	return <p className={accordionDescriptionClassName}>{text}</p>;
};
