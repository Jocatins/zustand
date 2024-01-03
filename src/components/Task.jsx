import "./task.css";

import classNames from "classnames";

const status = "DONE";

export const Task = ({ title }) => {
	return (
		<>
			<div className="task">
				<div>{title}</div>
				<div className="bottomWrapper">
					<div></div>
					<div className={classNames("status", status)}>{status}</div>
				</div>
			</div>
		</>
	);
};
