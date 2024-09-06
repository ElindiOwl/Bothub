import { FC, MouseEventHandler, ReactNode, useEffect } from 'react';
import { cn } from 'shared/lib';
import { DropdownShell } from 'shared/ui';
import { useMenu } from 'shared/model';

interface DropdownControlProps {
    listNodeToUse: ReactNode;
    elementToHook: HTMLElement;
    children: ReactNode;
}

interface DropdownMenuProps extends DropdownControlProps {
    shellContainerStyling: string;
    onMenuToggle: (isOpen: boolean) => void;
    menuName: string;
    disablePageScroll?: boolean;
    activeStyle?: string;
    inactiveStyle?: string;
    animationClasses?: {
        enter: string;
        enterActive: string;
        exit: string;
        exitActive: string;
    };
    animationTimeout?: number;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
	listNodeToUse,
	elementToHook,
	children,
	shellContainerStyling,
	onMenuToggle,
	menuName,
	disablePageScroll = false,
	activeStyle = '',
	inactiveStyle = '',
	animationClasses = {
		enter: '',
		enterActive: '',
		exit: '',
		exitActive: '',
	},
	animationTimeout = 0,

}) => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu(menuName, disablePageScroll);
	const appliedStyle = cn(
		[inactiveStyle],
		{ [activeStyle]: isMenuOpen },
	);

	useEffect(() => {
		if (onMenuToggle) {
			onMenuToggle(isMenuOpen);
		}
	}, [isMenuOpen, onMenuToggle]);

	const handleClickInside: MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation();
	};

	return (
		<div ref={menuRef} onClick={handleClickInside}>
			<div className={appliedStyle} onClick={toggleMenu}>
				{children}
			</div>
			<DropdownShell
				animationClasses={animationClasses}
				animationTimeout={animationTimeout}
				containerStyling={shellContainerStyling}
				isMenuOpen={isMenuOpen}
				nodeToUse={listNodeToUse}
				portalElement={elementToHook}
				toggleRef={menuRef} />
		</div>
	);
};
