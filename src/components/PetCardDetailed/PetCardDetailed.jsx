import { Link } from "react-router-dom";
import "./PetCardDetailed.scss";

export default function PetCardDetailed({ pet }) {
	return (
		<div className="pet-card-detailed">
			<h3 className="pet-card-detailed__name">{pet.name}</h3>
			<p className="pet-card-detailed__species">{pet.species}</p>
			<p className="pet-card-detailed__breed">{pet.breed}</p>
            <p className="pet-card-detailed__age">{pet.age} years old</p>
			<div className="pet-card-detailed__actions">
				<Link to={`/pets/${pet.id}`}>
					<button className="pet-card-detailed__button">View Details</button>
				</Link>
				<Link to={`/pets/${pet.id}/edit`}>
					<button className="pet-card-detailed__button pet-card-detailed__button--edit">Edit</button>
				</Link>
			</div>
		</div>
	);
}
