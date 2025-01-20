import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import BehaviorForm from "../../components/BehaviorForm/BehaviorForm";
import "./AddBehaviorPage.scss";

export default function AddBehaviorPage() {
	const [pets, setPets] = useState([]);
	const [selectedPet, setSelectedPet] = useState("");
	const [behavior, setBehavior] = useState({ description: "", date: "" });
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const petIdFromUrl = queryParams.get("petId");

		axios
			.get("http://localhost:5050/pets")
			.then((res) => {
				setPets(res.data);
				if (petIdFromUrl && res.data.some((pet) => pet.id === Number(petIdFromUrl))) {
					setSelectedPet(petIdFromUrl);
				}
			})
			.catch((err) => console.error("Error fetching pets:", err));
	}, [location.search]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedPet) {
			alert("Please select a pet.");
			return;
		}

		try {
			await axios.post("http://localhost:5050/behaviors", {
				pet_id: selectedPet,
				description: behavior.description,
				date: behavior.date,
			});
			navigate("/behaviors");
		} catch (error) {
			console.error("Error adding behavior:", error);
		}
	};

	return (
		<div className="add-behavior">
			<PageHeader title="Log a New Behavior" />
			<BehaviorForm
				behavior={behavior}
				handleChange={(e) => setBehavior({ ...behavior, [e.target.name]: e.target.value })}
				handleSubmit={handleSubmit}
				pets={pets}
				selectedPet={selectedPet}
				setSelectedPet={setSelectedPet}
			/>
		</div>
	);
}
