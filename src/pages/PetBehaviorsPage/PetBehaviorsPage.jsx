import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import BehaviorsList from "../../components/BehaviorsList/BehaviorsList";

export default function PetBehaviorsPage() {
	const { id } = useParams();
	const [pet, setPet] = useState(null);
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5050/pets/${id}`)
			.then((res) => setPet(res.data))
			.catch((err) => console.error("Error fetching pet details:", err));
	}, [id]);

	useEffect(() => {
		axios
			.get(`http://localhost:5050/behaviors/pet/${id}`)
			.then((res) => setBehaviors(res.data))
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, [id]);

	if (!pet) return <p>Loading...</p>;

	return (
		<div className="pet-behaviors">
			<PageHeader title={`${pet.name}'s Behaviors`} />
			<BehaviorsList behaviors={behaviors} hidePetColumn={true} hideHeader={true} />
			</div>
	);
}
