import { Button } from 'shared/ui';

import style from './AI-introduction.module.scss';

export const AIIntroduction = () => {
	return (
		<div className={style.introduction}>
			<h1>ChatGPT: ваш умный помощник</h1>
			<p className={style.introduction__description}>Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном
                месте. Без VPN и абонентской платы. Создавайте
                контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!</p>
			<Button additionalStyles={style.introduction__button} text={'Начать работу'} />
		</div>
	);
};