import { Link } from "react-router-dom";
import BehaviorCard from "../BehaviorCard/BehaviorCard";
import "./PetBehaviors.scss";

export default function PetBehaviors({ petId, behaviors }) {
	return (
		<div className="pet-behaviors">
			<h3>Recent Behaviors</h3>
			<div className="pet-behaviors__list">
				{behaviors.length > 0 ? (
					behaviors.map((behavior) => (
						<BehaviorCard key={behavior.id} behavior={behavior} />
					))
				) : (
					<p>No behaviors logged yet.</p>
				)}
			</div>
			<Link to={`/behaviors/add?petId=${petId}`} className="pet-behaviors__log">
				<button>Log New Behavior</button>
			</Link>
		</div>
	);
}
