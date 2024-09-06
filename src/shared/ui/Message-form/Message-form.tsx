import { FC, FormEvent, ReactNode, useEffect, useRef } from 'react';
import { cn } from 'shared/lib';

import style from './Message-form.module.scss';

interface MessageFormProps {
    placeHolderForMessage?: string;
    buttonForMessage?: ReactNode;
    styleForMessage?: string;
    styleForInput?: string;
    heightForInput: string;
}

export const MessageForm: FC<MessageFormProps> = ({
	placeHolderForMessage = '',
	buttonForMessage = '',
	styleForMessage = '',
	styleForInput = '',
	heightForInput,
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInput = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = heightForInput;
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	const handleClick = () => {
		if (textareaRef.current) {
			textareaRef.current.focus();
		}
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (textareaRef.current) {
			const inputText = textareaRef.current.value;
			console.log(inputText);
			textareaRef.current.value = '';
			textareaRef.current.style.height = heightForInput;
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = heightForInput;
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, []);

	return (
		<div className={cn([style.messageContainer, styleForMessage])}>
			<form className={style.messageContainer__form} onClick={handleClick} onSubmit={handleSubmit}>
				<textarea
					ref={textareaRef}
					className={cn([style.messageContainer__input, styleForInput])}
					placeholder={placeHolderForMessage}
					onInput={handleInput}
				/>
				{buttonForMessage}
			</form>
		</div>
	);
};
