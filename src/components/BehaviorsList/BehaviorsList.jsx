import { useNavigate } from "react-router-dom";
import BehaviorRow from "../BehaviorRow/BehaviorRow";
import "./BehaviorsList.scss";

export default function BehaviorsList({ behaviors, isLimited = false }) {
	const navigate = useNavigate();

	// Only include active behaviors
	const activeBehaviors = behaviors.filter((behavior) => behavior.status === "active");

	// If isLimited is true, only show the 5 most recent behaviors
	const displayedBehaviors = isLimited ? activeBehaviors.slice(0, 5) : activeBehaviors;

	return (
		<section className="behaviors-list">
			<h2>{isLimited ? "Recent Behaviors" : "All Behaviors"}</h2>
			{displayedBehaviors.length > 0 ? (
				<table className="behaviors-list__table">
					<thead>
						<tr>
							<th>Pet Name</th>
							<th>Date</th>
							<th>Description</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{displayedBehaviors.map((behavior) => (
							<BehaviorRow key={behavior.id} behavior={behavior} />
						))}
					</tbody>
				</table>
			) : (
				<p>No behaviors logged yet.</p>
			)}
			<div className="behaviors-list__buttons">
				{isLimited ? (
					<button onClick={() => navigate("/behaviors")}>
						View All Behaviors
					</button>
				) : (
					<button onClick={() => navigate("/behaviors/add")}>
						Add New Behavior
					</button>
				)}
			</div>
		</section>
	);
}
