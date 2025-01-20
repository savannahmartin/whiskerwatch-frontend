import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PetInfoCard.scss";

export default function PetInfoCard({ pet }) {
	const navigate = useNavigate();

    const handleArchive = async () => {
        if (window.confirm(`Are you sure you want to archive ${pet.name}?`)) {
            try {
                await axios.put(`http://localhost:5050/pets/${pet.id}/archive`);
                alert(`${pet.name} and its behaviors have been archived.`);
                navigate("/pets");
            } catch (error) {
                console.error("Error archiving pet:", error);
            }
        }
    };    

	return (
		<div className="pet-info-card">
			<p>
				<strong>Species:</strong> {pet.species || "Unknown"}
			</p>
			<p>
				<strong>Breed:</strong> {pet.breed || "Unknown"}
			</p>
			<p>
				<strong>Age:</strong> {pet.age || "Unknown"} years old
			</p>

			{pet.notes && (
				<div className="pet-info-card__notes">
					<strong>Additional Information:</strong>
					<p>{pet.notes}</p>
				</div>
			)}

			<div className="pet-info-card__buttons">
				<button onClick={() => navigate(`/pets/${pet.id}/edit`)}>Edit</button>
				<button className="pet-info-card__archive" onClick={handleArchive}>
					Archive
				</button>
			</div>
		</div>
	);
}
