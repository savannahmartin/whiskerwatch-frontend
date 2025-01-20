import { Link } from "react-router-dom";
import editIcon from "../../assets/images/edit.svg";
import "./BehaviorRow.scss";

export default function BehaviorRow({ behavior }) {
	return (
		<tr className="behavior-row">
			<td>{behavior.pet_name}</td>
			<td>{new Date(behavior.date).toLocaleDateString()}</td>
			<td>{behavior.description}</td>
			<td>
				<Link to={`/behavior/${behavior.id}/edit`}>
					<img src={editIcon} alt="Edit" className="behavior-row__edit-icon" />
				</Link>
			</td>
		</tr>
	);
}
