import { useEffect, useState } from "react";
import axios from "axios";
import PetsListDetailed from "../components/PetsListDetailed/PetsListDetailed";

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
			<PetsListDetailed pets={pets} />
		</div>
	);
}
