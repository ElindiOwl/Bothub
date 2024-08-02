import { useEffect, useRef, useState } from 'react';
import { eventSystem } from 'shared/lib/event-system.ts';


export const useMenu = (menuName) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		const handleMenuEvent = (openMenuName) => {
			if (openMenuName !== menuName) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		eventSystem.subscribe('menuToggled', handleMenuEvent);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			eventSystem.unsubscribe('menuToggled', handleMenuEvent);
		};
	}, [menuName]);

	const toggleMenu = () => {
		const newState = !isMenuOpen;
		setIsMenuOpen(newState);
		if (newState) {
			eventSystem.publish('menuToggled', menuName);
		}
	};

	return { isMenuOpen, menuRef, toggleMenu };
};