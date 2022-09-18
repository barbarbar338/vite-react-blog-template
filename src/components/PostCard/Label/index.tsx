import type { FC } from "react";
import { Link } from "react-router-dom";

export interface ILabel {
	name: string;
	color: string;
	id: string;
}

export const Label: FC<ILabel> = ({ color, id, name }) => (
	<Link
		to={`/labels/${id}`}
		style={{
			backgroundColor: `#${color}`,
		}}
		className="m-1 cursor-pointer rounded-full p-2 text-xs font-bold leading-3 text-white"
	>
		{name}
	</Link>
);
