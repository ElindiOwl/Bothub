import { CapsCounter } from 'entities/AI-chat';
import { Button, MessageForm } from 'shared/ui';
import { MessageBackgroundShapes, VectorSVG } from 'shared/assets';

import style from './Chat-message.module.scss';

export const ChatMessage = () => {
	return (
		<div className={style.message}>
			<CapsCounter />
			<MessageForm
				buttonForMessage={
					<Button
						additionalStyles={style.message__button}
						text={<VectorSVG />}
						type={'submit'}
					/>
				}
				heightForInput={'18px'}
				placeHolderForMessage={'Написать промт...'}
				styleForInput={style.message__input}
				styleForMessage={style.message__form} />
			<div className={style.message__background}>
				<MessageBackgroundShapes />
			</div>
		</div>
	);
};