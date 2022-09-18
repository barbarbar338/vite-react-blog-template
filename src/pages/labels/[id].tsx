import { type FC, useState } from "react";
import { useLocation } from "react-router";
import { PostCard } from "@components/PostCard";
import { Layout } from "@components/Layout";
import { getPosts } from "@utils/graphql";
import { chunk } from "@utils/chunk";
import useSWR from "swr";

const CategoryPage: FC = () => {
	const [name, setName] = useState("Category");

	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const { data: posts, error } = useSWR(`/labels/${id}`, async () => {
		const posts = await getPosts();
		return posts.filter((post) =>
			post.labels.some((label) => {
				const isPassed = label.id == id;
				if (isPassed) setName(label.name);
				return isPassed;
			}),
		);
	});

	return (
		<Layout title={name} addition={name} loading={!posts && !error}>
			{error
				? "error"
				: posts &&
				  chunk(posts, 2).map((postList, idx) => (
						<div
							key={idx}
							className="my-2 w-full items-center justify-center lg:flex"
						>
							{postList.map((post, idx) => (
								<PostCard {...{ key: idx, ...post }} />
							))}
						</div>
				  ))}
		</Layout>
	);
};

export default CategoryPage;
