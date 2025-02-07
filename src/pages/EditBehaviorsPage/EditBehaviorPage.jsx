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
			.get(`${import.meta.env.VITE_API_URL}/behaviors/${id}`)
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
			await axios.put(`${import.meta.env.VITE_API_URL}/behaviors/${id}`, behavior);
			navigate(-1);
		} catch (error) {
			console.error("Error updating behavior:", error);
		}
	};

	const handleDelete = async () => {
		const confirmDelete = window.confirm("Are you sure you want to delete this behavior?");
		if (!confirmDelete) return;

		try {
			await axios.delete(`${import.meta.env.VITE_API_URL}/behaviors/${id}`);
			navigate("/behaviors");
		} catch (error) {
			console.error("Error deleting behavior:", error);
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
