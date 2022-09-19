import { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { getPostData } from "@utils/graphql";
import { Layout } from "@components/Layout";
import { CONFIG } from "@utils/config";
import Giscus from "@giscus/react";
import hljs from "highlight.js";
import useSWR from "swr";

const PostPage: FC = () => {
	const location = useLocation();
	const number = location.pathname.split("/")[2];

	const { data: post, error } = useSWR(`/posts/${number}`, async () => {
		const post = await getPostData(parseInt(number));
		return post;
	});

	useEffect(() => {
		const codeBlocks = document.querySelectorAll(".highlight");
		for (const element of codeBlocks) {
			const content = element.getAttribute(
				"data-snippet-clipboard-copy-content",
			) as string;
			const highlighted = hljs.highlightAuto(content).value;
			element.innerHTML = `<pre>${highlighted}</pre>`;
		}
	}, [post]);

	return (
		<Layout title={post?.title || "Post"} loading={!post && !error}>
			{error
				? "error"
				: post && (
						<div className="container mx-auto pb-10">
							<div className="mx-auto flex items-center justify-center">
								Author:
								<a
									target="_blank"
									href={`https://github.com/${post.author.login}`}
									className="flex cursor-pointer items-center text-blue-500 hover:text-blue-600 hover:underline"
								>
									<img
										src={post.author.avatarUrl}
										className="mx-2 h-10 w-10 rounded-full"
									/>

									{post.author.login}
								</a>
							</div>
							<div
								className="prose mx-auto"
								dangerouslySetInnerHTML={{
									__html: post.bodyHTML,
								}}
							/>
							<Giscus
								repo={`${CONFIG.BLOG.username}/${CONFIG.BLOG.repo}`}
								repoId={CONFIG.BLOG.repo_id}
								mapping="number"
								term={post.number.toString()}
								reactionsEnabled="1"
								theme="light"
								emitMetadata="1"
							/>
						</div>
				  )}
		</Layout>
	);
};

export default PostPage;
