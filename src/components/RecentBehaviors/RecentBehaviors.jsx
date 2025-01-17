import { useNavigate } from "react-router-dom";
import "./RecentBehaviors.scss";
import editIcon from "../../assets/images/edit.svg";

export default function RecentBehaviors({ behaviors }) {
	const navigate = useNavigate();

	// Navigate to the correct edit page
	const handleEdit = (behaviorId) => {
		navigate(`/behavior/${behaviorId}/edit`); // Match PetDetailsPage path
	};

	return (
		<section className="recent-behaviors">
			<h2>Recent Behaviors</h2>
			{behaviors.length > 0 ? (
				<table className="recent-behaviors__table">
					<thead>
						<tr>
							<th>Pet Name</th>
							<th>Date</th>
							<th>Description</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{behaviors.map((behavior) => (
							<tr key={behavior.id}>
								<td>{behavior.pet_name}</td>
								<td>
									{new Date(
										behavior.date
									).toLocaleDateString()}
								</td>
								<td>{behavior.description}</td>
								<td>
									<button
										className="recent-behaviors__edit-button"
										onClick={() => handleEdit(behavior.id)}
									>
										<img
											src={editIcon}
											alt="Edit"
											className="recent-behaviors__edit-icon"
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No behaviors logged yet.</p>
			)}
			<div className="recent-behaviors__buttons">
				<button onClick={() => navigate("/behaviors")}>
					View All Behaviors
				</button>
				<button onClick={() => navigate("/behaviors/add")}>
					Add New Behavior
				</button>
			</div>
		</section>
	);
}
