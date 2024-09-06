import { cn, MessageType } from 'shared/lib';
import { FC } from 'react';

import style from './Conversation-message.module.scss';

interface InterlocutorStyleProps {
    interlocutorImgStyle?: string;
    interlocutorContainerStyle?: string;
    interlocutorTextStyle?: string;
    interlocutorNameStyle?: string;
}

interface UserStyleProps {
    userImgStyle?: string;
    userTextStyle?: string;
    userContainerStyle?: string;
}

interface ChatMessageStyleProps extends UserStyleProps, InterlocutorStyleProps {
    containerStyle?: string;
    messagesStyle?: string;
    iconStyle?: string;
    textStyle?: string;
}

export interface ConversationMessage extends ChatMessageStyleProps {
    imgSrc: string;
    imgAlt: string;
    interlocutorName?: string;
    text: string;
    type: MessageType;
}

export const ConversationMessage: FC<ConversationMessage> = ({
	imgSrc,
	imgAlt,
	interlocutorName = '',
	containerStyle = '',
	interlocutorNameStyle = '',
	iconStyle = '',
	textStyle = '',
	interlocutorTextStyle = '',
	userTextStyle = '',
	type,
	text,
	interlocutorContainerStyle = '',
	userContainerStyle = '',
	userImgStyle = '',
	interlocutorImgStyle = '',
	messagesStyle = '',
}) => {
	return (
		<div className={cn(['', containerStyle], {
			[interlocutorContainerStyle]: type === 'interlocutor',
			[userContainerStyle]: type === 'user',
		})}>
			<div className={style.conversation__container}>
				{type === 'interlocutor' && (
					<p className={interlocutorNameStyle}>
						{interlocutorName}
					</p>
				)}
				<div className={cn([style.conversation__messages, messagesStyle])}>
					<img
						alt={imgAlt}
						className={cn(
							['',
								iconStyle],
							{ [interlocutorImgStyle]: type === 'interlocutor', [userImgStyle]: type === 'user' },
						)}
						src={imgSrc}
					/>
					<p
						className={cn(
							[style.text,
								textStyle],
							{ [interlocutorTextStyle]: type === 'interlocutor', [userTextStyle]: type === 'user' },
						)}
					>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};