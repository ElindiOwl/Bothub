import { ChatConversation, ChatHeader, ChatMessage } from 'features/AI-chat';

import style from './AI-chat.module.scss';

export const AIChat = () => {
	return (
		<div className={style.chat}>
			<ChatHeader />
			<ChatConversation />
			<ChatMessage />
		</div>
	);
};