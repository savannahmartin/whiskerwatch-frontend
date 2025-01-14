import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
	const [pets, setPets] = useState([]);
	const [behaviors, setBehaviors] = useState([]);
	const navigate = useNavigate();

	// Map species to an emoji (temporary placeholder until image upload)
	const speciesEmojis = {
		cat: "🐱",
		dog: "🐶",
		bird: "🐦",
		fish: "🐠",
		rabbit: "🐰",
		hamster: "🐹",
		reptile: "🦎",
		default: "🐾", // Fallback for unknown species
	};

	// Fetch Pets
	useEffect(() => {
		axios
			.get("http://localhost:5050/pets")
			.then((res) => setPets(res.data))
			.catch((err) => console.error("Error fetching pets:", err));
	}, []);

	// Fetch Recent Behaviors
	useEffect(() => {
		axios
			.get("http://localhost:5050/behaviors")
			.then((res) => {
				// Sort behaviors by date (newest first)
				const sortedBehaviors = res.data.sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
				setBehaviors(sortedBehaviors.slice(0, 5)); // Limit to recent 5 behaviors
			})
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<h1>Their Habits, Your Peace of Mind</h1>
			<h3>Your partner in pet care</h3>

			{/* Pets Section */}
			<section>
				<h2>Pets</h2>
				<div>
					{pets.length > 0 ? (
						pets.map((pet) => (
							<div key={pet.id}>
								<h3
									onClick={() => navigate(`/pets/${pet.id}`)}
									style={{
										cursor: "pointer",
										color: "blue",
										textDecoration: "underline",
									}}
								>
									{pet.name}
								</h3>
								<p>
									{speciesEmojis[
										pet.species?.toLowerCase()
									] || speciesEmojis.default}
								</p>
							</div>
						))
					) : (
						<p>No pets added yet.</p>
					)}
				</div>
				<button onClick={() => navigate("/pets/add")}>Add New</button>
			</section>

			{/* Recent Behaviors Section */}
			<section>
				<h2>Recent Behaviors</h2>
				<div>
					{behaviors.length > 0 ? (
						behaviors.map((behavior) => (
							<div key={behavior.id}>
								<p>
									<strong>{behavior.date}</strong> -{" "}
									{behavior.pet_name}
								</p>
								<p>{behavior.description}</p>
							</div>
						))
					) : (
						<p>No behaviors logged yet.</p>
					)}
				</div>
				<button onClick={() => navigate("/behaviors")}>Add New</button>
			</section>
		</div>
	);
}
