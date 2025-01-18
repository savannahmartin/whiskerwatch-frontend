import { useEffect, useState } from "react";
import axios from "axios";

export default function BehaviorsPage() {
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/behaviors")
			.then((res) => setBehaviors(res.data))
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, []);

	return (
		<div>
			<h2>All Behaviors</h2>
			<ul>
				{behaviors.length > 0 ? (
					behaviors.map((behavior) => (
						<li key={behavior.id}>
							<strong>{behavior.pet_name}</strong>,{" "}
							{behavior.description},{" "}
							{new Date(behavior.date).toLocaleDateString()}
						</li>
					))
				) : (
					<p>No behaviors logged yet.</p>
				)}
			</ul>
		</div>
	);
}
