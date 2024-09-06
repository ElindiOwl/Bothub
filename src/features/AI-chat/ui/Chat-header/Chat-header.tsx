import { HeaderContext, NameContainer } from 'entities/AI-chat';

import style from './Chat-header.module.scss';

export const ChatHeader = () => {

	return (
		<div className={style.chatHeader}>
			<NameContainer />
			<HeaderContext />
		</div>
	);
};