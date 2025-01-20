import PetCardDetailed from "../PetCardDetailed/PetCardDetailed";
import "./PetsListDetailed.scss";

export default function PetsListDetailed({ pets }) {
	return (
		<section className="pets-list">
			<div className="pets-list__container">
				{pets.length > 0 ? (
					pets.map((pet) => <PetCardDetailed key={pet.id} pet={pet} />)
				) : (
					<p>No pets added yet.</p>
				)}
			</div>
		</section>
	);
}
