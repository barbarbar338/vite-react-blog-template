import type { FC } from "react";
import type { IPost } from "@utils/graphql";
import { Calendar, Clock, ExternalLink } from "react-feather";
import { calculate } from "calculate-readtime";
import { Link } from "react-router-dom";
import { Label } from "@components/PostCard/Label";

export const PostCard: FC<IPost> = ({
	author,
	body,
	createdAt,
	labels,
	bodyHTML,
	title,
	number,
}) => {
	const parts = bodyHTML.split(" ");
	const description = [];
	while (description.join(" ").length < 300) {
		description.push(parts.shift());
	}

	return (
		<div className="mb-7 rounded bg-white p-6 shadow-lg focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12">
			<div className="flex items-center border-b border-gray-200 pb-6">
				<img
					src={author.avatarUrl}
					alt={author.login}
					className="h-12 w-12 rounded-full"
				/>
				<div className="flex w-full items-start justify-between">
					<div className="w-full pl-3">
						<Link
							to={`/posts/${number}`}
							className="cursor-pointer text-xl font-medium leading-5 text-gray-800 hover:underline focus:outline-none"
						>
							{title}
						</Link>
						<p className="flex items-center pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
							<Calendar className="mr-1 h-4 w-4" /> {createdAt} -{" "}
							<Clock className="mx-1 h-4 w-4" /> {calculate(body)}
						</p>
					</div>
					<div>
						<Link
							to={`/posts/${number}`}
							target="_blank"
							className="cursor-pointer text-blue-500 hover:text-blue-600"
						>
							<ExternalLink />
						</Link>
					</div>
				</div>
			</div>
			<div className="px-2">
				<p
					className="py-4 text-sm leading-5 text-gray-600 focus:outline-none"
					dangerouslySetInnerHTML={{
						__html: description.join(" ") + "...",
					}}
				/>
				<div className="flex flex-wrap focus:outline-none">
					{labels.map((label, idx) => (
						<Label
							{...{
								key: idx,
								...label,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
