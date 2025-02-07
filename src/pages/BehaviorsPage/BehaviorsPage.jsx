import { useEffect, useState } from "react";
import axios from "axios";
import BehaviorsList from "../../components/BehaviorsList/BehaviorsList";
import "./BehaviorsPage.scss";

export default function BehaviorsPage() {
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		axios
			.get("${import.meta.env.VITE_API_URL}/behaviors")
			.then((res) => setBehaviors(res.data))
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, []);

	return (
		<div className="behaviors-page">
			<BehaviorsList behaviors={behaviors} />
		</div>
	);
}
