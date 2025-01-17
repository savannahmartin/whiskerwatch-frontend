import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetBehaviors from "../../components/PetBehaviors/PetBehaviors";
import "./PetDetailsPage.scss";

export default function PetDetailsPage() {
	const { id } = useParams();
	const [pet, setPet] = useState(null);
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		// Fetch pet details
		axios
			.get(`http://localhost:5050/pets/${id}`)
			.then((res) => setPet(res.data))
			.catch((err) => console.error("Error fetching pet details:", err));

		// Fetch behaviors for this pet
		axios
			.get(`http://localhost:5050/behaviors/pet/${id}`)
			.then((res) => {
				const sortedBehaviors = res.data.sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
				setBehaviors(sortedBehaviors.slice(0, 3));
			})
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, [id]);

	if (!pet) return <p>Loading pet details...</p>;

	return (
		<div className="pet-details">
			<h2 className="pet-details__name">{pet.name}</h2>
			<PetInfoCard pet={pet} />
			<PetBehaviors petId={id} behaviors={behaviors} />
			<Link to={`/pets/${id}/behaviors`}>
				<button className="pet-details__view-all">View All Behaviors</button>
			</Link>
		</div>
	);
}
