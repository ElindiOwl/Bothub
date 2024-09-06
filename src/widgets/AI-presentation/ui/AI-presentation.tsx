import { AnimatedBorder } from 'shared/ui';

import { AIChat } from './AI-chat/AI-chat.tsx';
import style from './AI-presentation.module.scss';

export const AIPresentation = () => {
	return (
		<div className={style.presentation}>
			<AnimatedBorder animation={style.presentation__background} wrapper={style.presentation__wrapper}>
				<AIChat />
			</AnimatedBorder>
		</div>

	);
};