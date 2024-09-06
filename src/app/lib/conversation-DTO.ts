import { userPlaceHolder } from 'shared/assets';
import { userDTO } from 'app/lib/user-DTO.ts';
import { geminiDTO } from 'app/lib/gemini-DTO.ts';
import { ConversationMessage } from 'shared/ui';


export const conversationDTO: ConversationMessage[] = [
	{
		imgAlt: 'Interlocutor image',
		imgSrc: geminiDTO.avatar,
		interlocutorName: geminiDTO.name,
		text: 'Hello, Im bot',
		type: 'interlocutor',
	},
	{
		imgAlt: 'User image',
		imgSrc: userDTO.avatar ? userDTO.avatar : userPlaceHolder as string,
		text: 'Hey',
		type: 'user',
	},
	{
		imgAlt: 'Interlocutor image',
		imgSrc: geminiDTO.avatar,
		interlocutorName: geminiDTO.name,
		text: 'How can I help you?',
		type: 'interlocutor',
	},
	{
		imgAlt: 'User image',
		imgSrc: userDTO.avatar ? userDTO.avatar : userPlaceHolder as string,
		text: 'Just testing scrollbar',
		type: 'user',
	},
	{
		imgAlt: 'Interlocutor image',
		imgSrc: geminiDTO.avatar,
		interlocutorName: geminiDTO.name,
		text: 'Great, tell me if you need something else',
		type: 'interlocutor',
	},
	{
		imgAlt: 'User image',
		imgSrc: userDTO.avatar ? userDTO.avatar : userPlaceHolder as string,
		text: 'Need more text',
		type: 'user',
	},
	{
		imgAlt: 'Interlocutor image',
		imgSrc: geminiDTO.avatar,
		interlocutorName: geminiDTO.name,
		text: 'Sure, here is some random information. Zweihänder swords developed from the longswords of the Late Middle Ages and became the hallmark weapon of the German Landsknechte from the time of Maximilian I (d. 1519) and during the Italian Wars of 1494–1559. The Goliath Fechtbuch (1510) shows an intermediate form between longsword and Zweihänder.',

		type: 'interlocutor',
	},
	{
		imgAlt: 'User image',
		imgSrc: userDTO.avatar ? userDTO.avatar : userPlaceHolder as string,
		text: 'thx',
		type: 'user',
	},
];