import { languageOptions } from 'entities/Header';

import style from './Language-list.module.scss';

export const LanguageList = () => {
	return (
		<>
			{languageOptions.map(({ option }, index) =>
				<option key={index} className={style.languageOption}>{option}</option>,
			)}
		</>
	);
};