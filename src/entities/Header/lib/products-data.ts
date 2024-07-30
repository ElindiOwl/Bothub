import { agg, business, telegram } from 'shared/assets';

type Data = {
    alt: string;
    description: string;
    header: string;
    img: string;
    link: string;
}

export const productsData: Data[] = [
	{
		alt: 'Агрегатор нейросетей BotHub',
		description: 'ChatGPT на базе 3.5 и 4.0 версии OpenAI',
		header: 'Агрегатор нейросетей BotHub',
		img: agg as string,
		link: '/agg',
	},
	{
		alt: 'Telegram бот',
		description: 'Удобный бот в Telegram который всегда под рукой',
		header: 'Telegram бот',
		img: telegram as string,
		link: '/telegram',
	},
	{
		alt: 'Бизнес бот',
		description: 'ChatGPT для эффективного решения бизнес задач',
		header: 'Бизнес бот',
		img: business as string,
		link: '/business',
	},
];