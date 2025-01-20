import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import PetForm from "../../components/PetForm/PetForm";
import "./EditPetPage.scss";

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
			navigate(`/pets/${id}`);
		} catch (error) {
			console.error(
				"Error updating pet:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<div className="edit-pet">
			<PageHeader title={`Edit ${pet.name}`} />
			<PetForm pet={pet} handleChange={handleChange} handleSubmit={handleSubmit} />
		</div>
	);
}
