import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditPetPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [pet, setPet] = useState({
		name: "",
		species: "",
		breed: "",
		age: "",
	});

	useEffect(() => {
		axios
			.get(`http://localhost:5050/pets/${id}`)
			.then((res) => setPet(res.data))
			.catch((err) => console.error("Error fetching pet details:", err));
	}, [id]);

	const handleChange = (e) => {
		setPet({ ...pet, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5050/pets/${id}`, pet);
			navigate(`/pets/${id}`); // Redirect back to pet details
		} catch (error) {
			console.error(
				"Error updating pet:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<div>
			<h2>Edit {pet.name}</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={pet.name}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="species"
					value={pet.species}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="breed"
					value={pet.breed}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="age"
					value={pet.age}
					onChange={handleChange}
				/>
				<button type="submit">Save Changes</button>
			</form>
		</div>
	);
}
