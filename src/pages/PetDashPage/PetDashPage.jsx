import { useEffect, useState } from "react";
import axios from "axios";
import PetsListDetailed from "../../components/PetsListDetailed/PetsListDetailed";
import AddPetButton from "../../components/AddPetButton/AddPetButton";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function PetDashPage() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios
			.get("${import.meta.env.VITE_API_URL}/pets")
			.then((res) => setPets(res.data))
			.catch((err) => console.error("Error fetching pets:", err));
	}, []);

	return (
		<div className="pet-dash">
			<PageHeader title="Your Pets" />
			<PetsListDetailed pets={pets} />
			<AddPetButton />
		</div>
	);
}
