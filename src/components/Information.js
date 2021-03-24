import "./Information.scss";
import Register from "./Register";

function Information({ header, date, copy, sales }) {
	return (
		<div className="info">
			<h1 className="info__header">{header}</h1>
			<p className="info__date">{date}</p>
			<p className="info__copy">{copy}</p>
			<Register />
			<p className="info__sales">{sales}</p>
		</div>
	);
}

export default Information;
