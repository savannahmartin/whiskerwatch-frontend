import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../../components/HeroSection/HeroSection";
import PetsList from "../../components/PetsList/PetsList";
import RecentBehaviors from "../../components/RecentBehaviors/RecentBehaviors";

export default function HomePage() {

	const [pets, setPets] = useState([]);
	const [behaviors, setBehaviors] = useState([]);

	useEffect(() => {
		axios
		.get(`${import.meta.env.VITE_API_URL}/pets`)
		.then((res) => {
			setPets(res.data);
		})
		.catch((err) => {
			console.error("Error fetching pets:", err);
		});
	}, []);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/behaviors`)
			.then((res) => {
				if (Array.isArray(res.data)) {
					const sortedBehaviors = res.data.sort(
						(a, b) => new Date(b.date) - new Date(a.date)
					);
					setBehaviors(sortedBehaviors.slice(0, 5));
				} else {
					console.error("Expected an array but got:", res.data);
					setBehaviors([])
				}
			})
			.catch((err) => console.error("Error fetching behaviors:", err));
	}, []);

	return (
		<div className="homepage">
			<HeroSection />
			<PetsList pets={pets} />
			<RecentBehaviors behaviors={behaviors} />
		</div>
	);
}
