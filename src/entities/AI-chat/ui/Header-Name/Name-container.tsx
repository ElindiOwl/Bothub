import { robotHead } from 'shared/assets';

import style from './Name-container.module.scss';

export const NameContainer = () => {
	return (
		<div className={style.nameContainer}>
			<img alt="robot head" className={style.nameContainer__icon} src={robotHead as string} />
			<div className={style.nameContainer__description}>
				<p className={style.nameContainer__name}>BitHub: ChatGPT & Midjourney</p>
				<p className={style.nameContainer__membership}>bot</p>
			</div>
		</div>
	);
};