import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditBehaviorPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [behavior, setBehavior] = useState({ description: "", date: "" });

	useEffect(() => {
		axios
			.get(`http://localhost:5050/behaviors/${id}`)
			.then((res) => setBehavior(res.data))
			.catch((err) => console.error("Error fetching behavior:", err));
	}, [id]);

	const handleChange = (e) => {
		setBehavior({ ...behavior, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5050/behaviors/${id}`, behavior);
			navigate(-1); // Go back to previous page
		} catch (error) {
			console.error(
				"Error updating behavior:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<div>
			<h2>Edit Behavior</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="description"
					value={behavior.description}
					onChange={handleChange}
					required
				/>
				<input
					type="date"
					name="date"
					value={behavior.date}
					onChange={handleChange}
					required
				/>
				<button type="submit">Save Changes</button>
			</form>
		</div>
	);
}
