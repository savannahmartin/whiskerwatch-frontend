import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function AddBehaviorPage() {
	const [pets, setPets] = useState([]);
	const [selectedPet, setSelectedPet] = useState("");
	const [behavior, setBehavior] = useState({ description: "", date: "" });
	const navigate = useNavigate();
	const location = useLocation();

	// Extract petId from query params (if it exists)
	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const petIdFromUrl = queryParams.get("petId");

		axios
			.get("http://localhost:5050/pets")
			.then((res) => {
				setPets(res.data);
				// If petId exists in URL and matches a pet, preselect it
				if (
					petIdFromUrl &&
					res.data.some((pet) => pet.id === Number(petIdFromUrl))
				) {
					setSelectedPet(petIdFromUrl);
				}
			})
			.catch((err) => console.error("Error fetching pets:", err));
	}, [location.search]);

	// Handle input changes
	const handleChange = (e) => {
		setBehavior({ ...behavior, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedPet) {
			alert("Please select a pet.");
			return;
		}

        console.log("Sending data:", {
            pet_id: selectedPet,
            description: behavior.description,
            date: behavior.date,
        });

		try {
			await axios.post("http://localhost:5050/behaviors", {
				pet_id: selectedPet,
				description: behavior.description,
				date: behavior.date,
			});
			navigate("/behaviors");
		} catch (error) {
			console.error(
				"Error adding behavior:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<div>
			<h2>Log a New Behavior</h2>
			<form onSubmit={handleSubmit}>
				{/* Dropdown for selecting a pet */}
				<label htmlFor="pet">Select Pet:</label>
				<select
					id="pet"
					value={selectedPet}
					onChange={(e) => setSelectedPet(e.target.value)}
					required
				>
					<option value="">-- Select a Pet --</option>
					{pets.map((pet) => (
						<option key={pet.id} value={pet.id}>
							{pet.name}
						</option>
					))}
				</select>

				{/* Behavior input fields */}
				<input
					type="text"
					name="description"
					placeholder="Behavior"
					value={behavior.description}
					onChange={handleChange}
					required
				/>
				<input
					type="date"
					name="date"
					value={behavior.date}
					onChange={handleChange}
					required
				/>

				<button type="submit">Log Behavior</button>
			</form>
		</div>
	);
}
