import { useState } from 'react';
import { ChatCheckbox } from 'entities/AI-chat';

import style from './Header-context.module.scss';

export const HeaderContext = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className={style.context}>
			<p className={style.context__text}>Сохранить контекст</p>
			<ChatCheckbox isChecked={isChecked} onChange={setIsChecked} />
		</div>
	);
};