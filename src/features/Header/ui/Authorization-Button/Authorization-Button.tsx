import { Button } from 'shared/ui';

import style from './Authorization-Button.module.scss';

export const AuthorizationButton = () => {
	return (
		<div className={style.authButton}>
			<Button additionalStyles={style.authButton_addition} text={'Авторизация'} />
		</div>
	);
};