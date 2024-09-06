import { useEffect, useState } from 'react';


export const useIdToHook = (elementId: string): HTMLElement | null => {
	const [element, setElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const elem = document.getElementById(elementId);
		if (elem) {
			setElement(elem as HTMLElement);
		}
	}, [elementId]);

	return element;
};