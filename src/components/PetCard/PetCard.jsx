import { useNavigate } from "react-router-dom";

const speciesEmojis = {
	cat: "🐱",
	dog: "🐶",
	bird: "🐦",
	fish: "🐠",
	rabbit: "🐰",
	hamster: "🐹",
	reptile: "🦎",
	default: "🐾",
};

export default function PetCard({ pet }) {
	const navigate = useNavigate();

	return (
		<div className="pet-card">
			<h3
				onClick={() => navigate(`/pets/${pet.id}`)}
				className="pet-card__name"
			>
				{pet.name}
			</h3>
			<p className="pet-card__emoji">
				{speciesEmojis[pet.species?.toLowerCase()] || speciesEmojis.default}
			</p>
		</div>
	);
}
