import "./BehaviorCard.scss"

export default function BehaviorCard({ behavior }) {
	return (
		<div className="behavior-card">
			<p className="behavior-card__date">{new Date(behavior.date).toLocaleDateString()}</p>
			<p className="behavior-card__description">{behavior.description}</p>
			<p className="behavior-card__pet-name">{behavior.pet_name}</p>
		</div>
	);
}
