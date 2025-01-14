import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddPetPage() {
	const [pet, setPet] = useState({
		name: "",
		species: "",
		breed: "",
		age: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setPet({ ...pet, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5050/pets", pet);
			navigate("/pets");
		} catch (error) {
			console.error("Error adding pet:", error);
		}
	};

	return (
		<div>
			<h2>Add Pet</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={pet.name}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="species"
					placeholder="Species"
					value={pet.species}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="breed"
					placeholder="Breed"
					value={pet.breed}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="age"
					placeholder="Age"
					value={pet.age}
					onChange={handleChange}
				/>
				<button type="submit">Add Pet</button>
			</form>
		</div>
	);
}
