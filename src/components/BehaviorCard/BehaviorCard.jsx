export default function BehaviorCard({ behavior }) {
	return (
		<div className="behavior-card">
			<p className="behavior-card__date">
				<strong>{new Date(behavior.date).toLocaleDateString()}</strong> - {behavior.pet_name}
			</p>
			<p className="behavior-card__description">{behavior.description}</p>
		</div>
	);
}
