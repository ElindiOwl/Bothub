import { CompanyProducts } from 'features/Header';

export const navItems = [
	{
		isNode: true,
		item: <CompanyProducts />,
	},
	{
		isExternal: false,
		isNode: false,
		item: 'Пакеты',
		link: '/',
	},
	{
		isExternal: true,
		isNode: false,
		item: 'API',
		link: '/',
	},
	{
		isExternal: false,
		isNode: false,
		item: 'Блог',
		link: '/',
	},
];