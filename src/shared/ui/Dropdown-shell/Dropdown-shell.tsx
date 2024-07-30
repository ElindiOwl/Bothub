import { Portal } from 'shared/ui';
import { FC, ReactNode, RefObject } from 'react';
import { cn } from 'shared/lib';

interface DropdownContentProps {
    nodeToUse: ReactNode;
    containerStyling: string;
}

interface DropdownShellProps extends DropdownContentProps {
    portalElement: HTMLElement;
    toggleRef: RefObject<HTMLDivElement>;
}

export const DropdownShell: FC<DropdownShellProps> = ({ portalElement, containerStyling, nodeToUse }) => {

	return (
		<Portal portal={portalElement}>
			<div className={cn(['', containerStyling])}>
				{nodeToUse}
			</div>
		</Portal>
	);
};