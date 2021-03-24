import "./Footer.scss";

function Footer({ text, number }) {
	return (
		<>
			<div className="footer">
				<p className="footer__text">{text}</p>
				<p className="footer__number">{number}</p>
			</div>
		</>
	);
}

export default Footer;
