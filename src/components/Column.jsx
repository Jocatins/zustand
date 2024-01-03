import "./column.css";

import { Task } from "./Task";

export const Column = ({ state }) => {
	return (
		<>
			<div className="column">
				<p>{state}</p>
				<Task title="Todo" />
			</div>
		</>
	);
};
