import { LogoSVG } from 'shared/assets';
import { Link } from 'react-router-dom';

import style from './Header-logo.module.scss';

export const HeaderLogo = () => {
	return (
		<Link className={style.bothubLogo} to="/">
			<LogoSVG />
		</Link>
	);
};