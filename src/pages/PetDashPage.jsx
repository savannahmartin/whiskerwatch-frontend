import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PetDashPage() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/pets")
			.then((res) => setPets(res.data))
			.catch((err) => console.error("Error fetching pets:", err));
	}, []);

	return (
		<div>
			<h2>Pets</h2>
			<Link to="/pets/add">
				<button>Add Pet</button>
			</Link>
			<ul>
				{pets.map((pet) => (
					<li key={pet.id}>
						{pet.name} - {pet.species}
						<Link to={`/pets/${pet.id}`}>
							<button>View Details</button>
						</Link>
						<Link to={`/pets/${pet.id}/edit`}>
							<button>Edit</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
