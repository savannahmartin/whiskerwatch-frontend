import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PetDashPage() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/api/pets") // Adjust port if needed
			.then((res) => setPets(res.data))
			.catch((err) => console.error("Error fetching pets:", err));
	}, []);

	return (
		<div>
			<h2>Pet Dashboard</h2>
			<Link to="/add-pet">
				<button>Add Pet</button>
			</Link>
			<ul>
				{pets.map((pet) => (
					<li key={pet.id}>
						{pet.name} - {pet.species}
						<Link to={`/edit-pet/${pet.id}`}>
							<button>Edit</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
