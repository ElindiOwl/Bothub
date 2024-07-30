import { FC, ReactNode } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

import style from './Wrapper.module.scss';

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<>
			<header className={style.wrapper__header}>
				<Header />
			</header>
			<main className={style.wrapper__main}>
				{children}
			</main>
			<footer className={style.wrapper__footer}>
				<Footer />
			</footer>
		</>
	);
};