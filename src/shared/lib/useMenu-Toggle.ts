import { useState } from 'react';

export const useMenuToggle = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (isOpen) => {
		setMenuOpen(isOpen);
	};

	return { isMenuOpen, setMenuOpen, toggleMenu };
};
