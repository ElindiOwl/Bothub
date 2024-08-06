import { useEffect, useRef, useState } from 'react';

import { eventSystem } from './event-system.ts';

export const useMenu = (menuName, disablePageScroll = false) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
				if (disablePageScroll) {
					document.body.style.overflow = '';
				}
			}
		};

		const handleMenuEvent = (openMenuName) => {
			if (openMenuName !== menuName) {
				setIsMenuOpen(false);
				if (disablePageScroll) {
					document.body.style.overflow = '';
				}
			}
		};

		document.addEventListener('click', handleOutsideClick);
		eventSystem.subscribe('menuToggled', handleMenuEvent);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			eventSystem.unsubscribe('menuToggled', handleMenuEvent);
		};
	}, [menuName, disablePageScroll]);

	const toggleMenu = () => {
		const newState = !isMenuOpen;
		setIsMenuOpen(newState);
		if (newState) {
			eventSystem.publish('menuToggled', menuName);
			if (disablePageScroll) {
				document.body.style.overflow = 'hidden';
			}
		} else {
			if (disablePageScroll) {
				document.body.style.overflow = '';
			}
		}
	};

	return { isMenuOpen, menuRef, toggleMenu };
};
