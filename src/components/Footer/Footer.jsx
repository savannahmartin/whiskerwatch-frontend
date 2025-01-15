import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Footer.scss";

export default function Footer() {
	return (
		<header className="footer">
			<Link to="/" className="logo-container">
				<img src={logo} alt="Whisker Watch Logo" className="logo" />
				<h1>Whisker Watch</h1>
			</Link>

        <div className=""></div>
		</header>
	);
}
