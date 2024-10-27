import { AIIntroduction } from 'entities/Main';
import { AIPresentation } from 'widgets/AI-presentation';

import style from './AI-section.module.scss';

export const AISection = () => {
	return (
		<section className={style.sectionContainer}>
			<div className={style.sectionContainer__background}>
			</div>
			<div className={style.sectionContainer__content}>
				<AIIntroduction />
				<AIPresentation />
			</div>
		</section>
	);
};