import BehaviorCard from "../BehaviorCard/BehaviorCard";
import { useNavigate } from "react-router-dom";

export default function RecentBehaviors({ behaviors }) {
	const navigate = useNavigate();

	return (
		<section className="recent-behaviors">
			<h2>Recent Behaviors</h2>
			<div className="recent-behaviors__container">
				{behaviors.length > 0 ? (
					behaviors.map((behavior) => (
						<BehaviorCard key={behavior.id} behavior={behavior} />
					))
				) : (
					<p>No behaviors logged yet.</p>
				)}
			</div>
			<button onClick={() => navigate("/behaviors/add")}>Add New Behavior</button>
		</section>
	);
}
