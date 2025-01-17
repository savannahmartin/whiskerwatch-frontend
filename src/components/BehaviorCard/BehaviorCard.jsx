import { Link } from "react-router-dom";
import editIcon from "../../assets/images/edit.svg";
import "./BehaviorCard.scss";

export default function BehaviorCard({ behavior }) {
	return (
		<div className="behavior-card">
			<p className="behavior-card__date">{new Date(behavior.date).toLocaleDateString()}</p>
			<p className="behavior-card__description">{behavior.description}</p>
			<Link to={`/behavior/${behavior.id}/edit`} className="behavior-card__edit">
				<img src={editIcon} alt="Edit" />
			</Link>
		</div>
	);
}
