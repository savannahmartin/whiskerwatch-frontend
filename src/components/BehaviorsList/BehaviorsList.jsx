import { useNavigate } from "react-router-dom";
import BehaviorRow from "../BehaviorRow/BehaviorRow";
import "./BehaviorsList.scss";

export default function BehaviorsList({ behaviors, isLimited = false, hidePetColumn = false, hideHeader = false }) {
	const navigate = useNavigate();

	// Only include active behaviors
	const activeBehaviors = behaviors.filter((behavior) => behavior.status === "active");

	// Sort behaviors by most recent date first
	const sortedBehaviors = [...activeBehaviors].sort((a, b) => new Date(b.date) - new Date(a.date));

	// If isLimited is true, only show the 5 most recent behaviors
	const displayedBehaviors = isLimited ? sortedBehaviors.slice(0, 5) : sortedBehaviors;

	return (
		<section className="behaviors-list">
			{!hideHeader && <h2>{isLimited ? "Recent Behaviors" : "All Behaviors"}</h2>}
			{displayedBehaviors.length > 0 ? (
				<table className="behaviors-list__table">
					<thead>
						<tr>
							{!hidePetColumn && <th>Pet Name</th>}
							<th>Date</th>
							<th>Description</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{displayedBehaviors.map((behavior) => (
							<BehaviorRow key={behavior.id} behavior={behavior} hidePetColumn={hidePetColumn} />
						))}
					</tbody>
				</table>
			) : (
				<p>No behaviors logged yet.</p>
			)}
			<div className="behaviors-list__buttons">
				{isLimited ? (
					<button onClick={() => navigate("/behaviors")}>View All Behaviors</button>
				) : (
					<button onClick={() => navigate("/behaviors/add")}>Add New Behavior</button>
				)}
			</div>
		</section>
	);
}
