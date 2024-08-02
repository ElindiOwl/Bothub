import { FC, MouseEventHandler, ReactNode, useEffect } from 'react';
import { DropdownShell } from 'shared/ui';
import { cn, useMenu } from 'shared/lib';

interface DropdownControlProps {
    listNodeToUse: ReactNode;
    elementToHook: HTMLElement;
    children: ReactNode;
}

interface DropdownMenuProps extends DropdownControlProps {
    shellContainerStyling: string;
    onMenuToggle: (isOpen: boolean) => void;
    menuName: string;
    activeStyle?: string;
    inactiveStyle?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
	listNodeToUse,
	elementToHook,
	children,
	shellContainerStyling,
	onMenuToggle,
	menuName,
	activeStyle = '',
	inactiveStyle = '',
}) => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu(menuName);
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
			{isMenuOpen && (
				<DropdownShell
					containerStyling={shellContainerStyling}
					nodeToUse={listNodeToUse}
					portalElement={elementToHook}
					toggleRef={menuRef}
				/>
			)}
		</div>
	);
};
