import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PetBehaviorsPage() {
	const { id } = useParams(); // Get pet ID from URL
	const [pet, setPet] = useState(null);
	const [behaviors, setBehaviors] = useState([]);

	// Fetch pet details
	useEffect(() => {
		axios
			.get(`http://localhost:5050/pets/${id}`)
			.then((res) => setPet(res.data))
			.catch((err) => console.error("Error fetching pet details:", err));
	}, [id]);

	// Fetch behaviors for this pet
	useEffect(() => {
		axios
			.get(`http://localhost:5050/pets/${id}/behaviors`)
			.then((res) => setBehaviors(res.data))
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, [id]);

	if (!pet) return <p>Loading pet details...</p>;

	return (
		<div>
			<h2>Behaviors for {pet.name}</h2>
			{behaviors.length > 0 ? (
				<ul>
					{behaviors.map((behavior) => (
						<li key={behavior.id}>
							<strong>{behavior.date}:</strong>{" "}
							{behavior.description}
						</li>
					))}
				</ul>
			) : (
				<p>No behaviors logged for this pet yet.</p>
			)}
		</div>
	);
}
