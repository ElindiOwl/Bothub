export type NavLink = {
    item: string;
    isExternal: boolean;
    link: string;
};

export const navLinks: NavLink[] = [
	{
		isExternal: false,
		item: 'Пакеты',
		link: '/',
	},
	{
		isExternal: true,
		item: 'API',
		link: '/',
	},
	{
		isExternal: false,
		item: 'Блог',
		link: '/',
	},
];