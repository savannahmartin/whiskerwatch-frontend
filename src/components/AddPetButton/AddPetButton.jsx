import { Link } from "react-router-dom";
import "./AddPetButton.scss";

export default function AddPetButton() {
	return (
		<Link to="/pets/add">
			<button className="add-pet-button">Add Pet</button>
		</Link>
	);
}
