import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    portal: Element | DocumentFragment;
}

export const Portal: FC<PortalProps> = ({ children, portal }) => {

	if (portal) {
		return createPortal(
			<>
				{children}
			</>,
			portal,
		);
	}
	return null;
};
