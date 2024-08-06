import { useEffect, useState } from 'react';

export const useIdToHook = (elementId) => {
	const [element, setElement] = useState(null);

	useEffect(() => {
		const elem = document.getElementById(elementId);
		if (elem) {
			setElement(elem);
		}
	}, [elementId]);

	return element;
};