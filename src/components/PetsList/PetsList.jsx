import { useNavigate } from "react-router-dom";
import PetCard from "../PetCard/PetCard";
import "./PetsList.scss"


export default function PetsList({ pets }) {
	const navigate = useNavigate();

	return (
		<section className="pets-list">
			<h2>Pets</h2>
			<div className="pets-list__container">
				{pets.length > 0 ? (
					pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
				) : (
					<p>No pets added yet.</p>
				)}
			</div>
			<button onClick={() => navigate("/pets/add")}>Add New Pet</button>
		</section>
	);
}
