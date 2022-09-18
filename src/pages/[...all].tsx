import type { FC } from "react";
import { Layout } from "@components/Layout";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
	return (
		<Layout title="404" addition="404 not found">
			<div className="container mx-auto text-center">
				<h1 className="text-4xl">Page not found.</h1>
				<Link
					className="cursor-pointer text-xl text-blue-500 hover:text-blue-600 hover:underline"
					to="/"
				>
					Go Home
				</Link>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
