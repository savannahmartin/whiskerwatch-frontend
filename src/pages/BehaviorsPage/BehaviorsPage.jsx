import { useEffect, useState } from "react";
import axios from "axios";
import BehaviorsList from "../../components/BehaviorsList/BehaviorsList";
import "./BehaviorsPage.scss";

export default function BehaviorsPage() {
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/behaviors")
			.then((res) => setBehaviors(res.data))
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, []);

	return (
		<div className="behaviors-page">
			<BehaviorsList behaviors={behaviors} />
		</div>
	);
}
