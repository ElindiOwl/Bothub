import { conversationDTO } from 'app/lib/conversation-DTO.ts';
import { ConversationMessage } from 'shared/ui';

import style from './Chat-conversation.module.scss';

export const ChatConversation = () => {
	return (
		<div className={style.conversation}>
			{conversationDTO.map((message) => (
				<ConversationMessage
					containerStyle={style.conversation__container}
					iconStyle={style.conversation__icon}
					imgAlt={message.imgAlt}
					imgSrc={message.imgSrc as string}
					interlocutorContainerStyle={style.conversation__interlocutor}
					interlocutorName={message.interlocutorName}
					interlocutorNameStyle={style.conversation__interlocutor_name}
					interlocutorTextStyle={style.conversation__interlocutor_text}
					messagesStyle={style.conversation__messages}
					text={message.text}
					textStyle={style.conversation__text}
					type={message.type}
					userContainerStyle={style.conversation__user}
					userImgStyle={style.conversation__user_img}
					userTextStyle={style.conversation__user_text} />
			))}
		</div>
	);
};