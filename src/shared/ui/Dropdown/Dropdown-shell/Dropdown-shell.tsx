import { Portal } from 'shared/ui';
import { FC, ReactNode, RefObject } from 'react';
import { cn } from 'shared/lib';
import { CSSTransition } from 'react-transition-group';

interface DropdownContentProps {
    nodeToUse: ReactNode;
    containerStyling: string;
}

interface DropdownShellProps extends DropdownContentProps {
    portalElement: HTMLElement;
    toggleRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
    animationClasses: {
        enter: string;
        enterActive: string;
        exit: string;
        exitActive: string;
    };
    animationTimeout: number;
}

export const DropdownShell: FC<DropdownShellProps> = ({
	portalElement,
	containerStyling,
	nodeToUse,
	isMenuOpen,
	animationClasses,
	animationTimeout,
}) => {
	return (
		<Portal portal={portalElement}>
			<CSSTransition
				unmountOnExit
				classNames={animationClasses}
				in={isMenuOpen}
				timeout={animationTimeout}
			>
				<div className={cn(['', containerStyling])}>
					{nodeToUse}
				</div>
			</CSSTransition>
		</Portal>
	);
};
