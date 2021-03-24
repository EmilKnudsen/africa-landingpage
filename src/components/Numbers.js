import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function Numbers() {
	var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios.get("./data.json").then((response) => {
				setContent(response.data);
			});
		},
		[setContent]
	);

	return (
		<div className="numbers">
			{content.map(function (item) {
				return <Footer text={item.header} number={item.number} />;
			})}
		</div>
	);
}

export default Numbers;
