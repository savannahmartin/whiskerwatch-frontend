import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import BehaviorForm from "../../components/BehaviorForm/BehaviorForm";
import "./EditBehaviorPage.scss";

export default function EditBehaviorPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [behavior, setBehavior] = useState({ description: "", date: "", pet_name: "" });

	useEffect(() => {
		axios
			.get(`http://localhost:5050/behaviors/${id}`)
			.then((res) => {
				const behaviorData = res.data;
	
				if (behaviorData.date) {
					behaviorData.date = new Date(behaviorData.date).toISOString().split("T")[0];
				}
	
				setBehavior(behaviorData);
			})
			.catch((err) => console.error("Error fetching behavior:", err));
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5050/behaviors/${id}`, behavior);
			navigate(-1); // Go back to previous page
		} catch (error) {
			console.error("Error updating behavior:", error);
		}
	};

	return (
		<div className="edit-behavior">
			<PageHeader title="Edit Behavior" />
			<p className="edit-behavior__pet-name">
				<strong>Pet:</strong> {behavior.pet_name || "Unknown"}
			</p>
			<BehaviorForm
				behavior={behavior}
				handleChange={(e) => setBehavior({ ...behavior, [e.target.name]: e.target.value })}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}
