import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import PetForm from "../../components/PetForm/PetForm";
import "./AddPetPage.scss"

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
			await axios.post("${import.meta.env.VITE_API_URL}/pets", pet);
			navigate("/pets");
		} catch (error) {
			console.error("Error adding pet:", error);
		}
	};

	return (
		<div className="add-pet">
			<PageHeader title="Add Pet" />
			<PetForm pet={pet} handleChange={handleChange} handleSubmit={handleSubmit} />
		</div>
	);
}
