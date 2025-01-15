import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			{/* Logo & App Name */}
			<Link to="/" className="header__logo-container">
				<img src={logo} alt="Whisker Watch Logo" className="header__logo" />
				<h2 className="header__title">Whisker Watch</h2>
			</Link>

			{/* Navigation Links */}
			<nav className="header__nav">
				<Link to="/pets" className="header__nav-link">Pets</Link>
				<Link to="/behaviors" className="header__nav-link">Behaviors</Link>
			</nav>
		</header>
	);
}
