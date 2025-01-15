import { useNavigate } from "react-router-dom";
import "./PetCard.scss";

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
<div className="pet-card" onClick={() => navigate(`/pets/${pet.id}`)}>
    <h3 className="pet-card__name">{pet.name}</h3>  {/* Name now appears first */}
    <p className="pet-card__emoji">
        {speciesEmojis[pet.species?.toLowerCase()] || speciesEmojis.default}
    </p>
</div>

	);
}
