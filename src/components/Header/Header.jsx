import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.scss"; // Import SCSS

export default function Header() {
	return (
		<header className="header">
			{/* Logo & App Name */}
			<Link to="/" className="logo-container">
				<img src={logo} alt="Whisker Watch Logo" className="logo" />
				<h1>Whisker Watch</h1>
			</Link>

			{/* Navigation Links */}
			<nav className="nav">
				<Link to="/pets" className="nav-link">Pets</Link>
				<Link to="/behaviors" className="nav-link">Behaviors</Link>
			</nav>
		</header>
	);
}
