import { useMenu } from 'shared/lib';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { DropdownShell } from 'shared/ui';

interface DropdownControlProps {
    listNodeToUse: ReactNode,
    elementToHook: HTMLElement,
    children: ReactNode,
}

interface DropdownMenuProps extends DropdownControlProps {
    shellContainerStyling: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
	listNodeToUse,
	elementToHook,
	children,
	shellContainerStyling,
}) => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu();
	const hookElement = elementToHook;
	const listNode = listNodeToUse;

	const handleClickInside: MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation();
	};

	return (
		<div ref={menuRef} onClick={handleClickInside}>
			<div onClick={toggleMenu}>
				{children}
			</div>
			{isMenuOpen && (
				<DropdownShell containerStyling={shellContainerStyling} nodeToUse={listNode}
					portalElement={hookElement} toggleRef={menuRef} />
			)}
		</div>
	);
};