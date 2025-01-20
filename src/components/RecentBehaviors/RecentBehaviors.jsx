import BehaviorsList from "../BehaviorsList/BehaviorsList";
import "./RecentBehaviors.scss"

export default function RecentBehaviors({ behaviors }) {
	return <BehaviorsList behaviors={behaviors} isLimited={true} />;
}
