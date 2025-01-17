import { Link } from "react-router-dom";
import "./PetInfoCard.scss";

export default function PetInfoCard({ pet }) {
	return (
		<div className="pet-info-card">
			<ul className="pet-info-card__list">
				<li><strong>Species:</strong> {pet.species || "Unknown"}</li>
				<li><strong>Breed:</strong> {pet.breed || "Unknown"}</li>
				<li><strong>Age:</strong> {pet.age || "Unknown"}</li>
			</ul>
			<Link to={`/pets/${pet.id}/edit`} className="pet-info-card__edit">
				<button>Edit Pet</button>
			</Link>
		</div>
	);
}
