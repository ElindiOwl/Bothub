import { useEffect, useState } from 'react'

export const useScrollHandler = (isScrollableStyle: boolean) => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		if (!isScrollableStyle) {
			return
		}
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isScrollableStyle])

	return scrolled
}
