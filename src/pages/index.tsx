import type { FC } from "react";
import { PostCard } from "@components/PostCard";
import { Layout } from "@components/Layout";
import { getPosts } from "@utils/graphql";
import { chunk } from "@utils/chunk";
import useSWR from "swr";

const HomePage: FC = () => {
	const { data: posts, error } = useSWR("/posts", async () => {
		const posts = await getPosts();
		return posts;
	});

	return (
		<Layout title="Home" loading={!posts && !error}>
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

export default HomePage;
