import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "~react-pages";
import { Layout } from "@components/Layout";

export const Router = () => {
	const element = useRoutes(routes);
	return (
		<Suspense
			fallback={
				<Layout title="Loading" loading={true}>
					loading
				</Layout>
			}
		>
			{element}
		</Suspense>
	);
};
