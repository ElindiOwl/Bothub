import { productsData } from 'entities/Header';
import { Link } from 'react-router-dom';

import style from './Product-List.module.scss';

export const ProductsList = () => {
	return (
		<>
			{productsData.map(({ description, header, img, link, alt }, index) =>
				<Link key={index} className={style.link} to={link}>
					<img alt={alt} className={style.link__image} src={img} />
					<div className={style.link__text}>
						<h2 className={style.link__header}>{header}</h2>
						<p className={style.link__description}>{description}</p>
					</div>
				</Link>,
			)}
		</>
	);
};