import type { FC } from "react";
import { Link } from "react-router-dom";

export interface INavbar {
	addition?: string;
}

export const Navbar: FC<INavbar> = ({ addition }) => (
	<div className="mx-auto py-5">
		<h1 className="text-center text-4xl font-bold">
			<Link to="/" className="cursor-pointer hover:underline">
				338 Blogs
			</Link>
			{addition ? ` - ${addition}` : ""}
		</h1>
		<h2 className="text-center text-2xl">
			This website is{" "}
			<a
				href="https://github.com/barbarbar338/vite-react-blog-template"
				target="_blank"
				className="cursor-pointer text-blue-500 hover:text-blue-600 hover:underline"
			>
				open sourced!
			</a>
		</h2>
	</div>
);
