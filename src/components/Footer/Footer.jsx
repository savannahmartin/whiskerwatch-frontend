import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import xIcon from "../../assets/images/x.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__start">
				<Link to="/" className="footer__logo-container">
					<img
						src={logo}
						alt="Whisker Watch Logo"
						className="footer__logo"
					/>
					<h1 className="footer__title">Whisker Watch</h1>
				</Link>
			</div>

			<div className="footer__end">
				<div className="footer__social-icons">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__social-link"
					>
						<img
							src={instagramIcon}
							alt="Instagram"
							className="footer__social-icon"
						/>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__social-link"
					>
						<img
							src={xIcon}
							alt="X"
							className="footer__social-icon"
						/>
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__social-link"
					>
						<img
							src={facebookIcon}
							alt="Facebook"
							className="footer__social-icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
