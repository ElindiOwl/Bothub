import { userDTO } from 'app/lib/user-DTO.ts';

import style from './Caps-counter.module.scss';

export const CapsCounter = () => {
	return (
		<div className={style.counter}>
			<div className={style.counter__overlay}></div>
			<div className={style.counter__container}>
				<p className={style.counter__text}>Осталось Caps:</p>
				<p className={style.counter__amount}>{userDTO.caps}</p>
			</div>
		</div>
	);
};