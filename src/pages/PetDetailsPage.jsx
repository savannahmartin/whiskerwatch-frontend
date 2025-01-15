import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
		<div>
			<h2>{pet.name}'s Details</h2>
			<p>
				<strong>Species:</strong> {pet.species || "Unknown"}
			</p>
			<p>
				<strong>Breed:</strong> {pet.breed || "Unknown"}
			</p>
			<p>
				<strong>Age:</strong> {pet.age || "Unknown"}
			</p>

			<Link to={`/pets/${id}/edit`}>
				<button>Edit Pet</button>
			</Link>
			<Link to="/pets">
				<button>Back to Dashboard</button>
			</Link>

			<h3>Recent Behaviors</h3>
			<Link to={`/behaviors/add?petId=${id}`}>
				<button>Log New Behavior</button>
			</Link>

			<ul>
				{behaviors.length > 0 ? (
					behaviors.map((behavior) => (
						<li key={behavior.id}>
							{behavior.description} ({behavior.date})
							<Link to={`/behavior/${behavior.id}/edit`}>
								<button>Edit</button>
							</Link>
						</li>
					))
				) : (
					<p>No behaviors logged yet.</p>
				)}
			</ul>

			{/* View all behaviors for this pet */}
			<Link to={`/pets/${id}/behaviors`}>
				<button>View All Behaviors</button>
			</Link>
		</div>
	);
}
