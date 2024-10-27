import { ChatBackgroundShapes } from 'shared/assets';
import { AnimatedBorder } from 'shared/ui';
import { AIChat } from 'widgets/AI-presentation/ui/AI-chat/AI-chat.tsx';

import style from './AI-presentation.module.scss';

export const AIPresentation = () => {
	return (
		<div className={style.presentation}>
			<div className={style.presentation__lights}>
				<ChatBackgroundShapes />
			</div>
			<AnimatedBorder animation={style.presentation__background} wrapper={style.presentation__wrapper}>
				<AIChat />
			</AnimatedBorder>
		</div>

	);
};