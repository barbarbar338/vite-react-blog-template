import type { FC } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";

export interface ILayout {
	children: React.ReactNode;
	title: string;
	addition?: string;
	loading?: boolean;
}

export const Layout: FC<ILayout> = ({ children, title, addition, loading }) => {
	return (
		<>
			<Helmet>
				<title>{title} - Vite React Blog Template</title>
			</Helmet>
			<Navbar addition={addition} />
			{loading ? <Preloader /> : children}
		</>
	);
};
