import { Link } from "react-router-dom";
import "./PetCardDetailed.scss";

export default function PetCardDetailed({ pet }) {
    return (
        <Link to={`/pets/${pet.id}`} className="pet-card-detailed">
            <h3 className="pet-card-detailed__name">{pet.name}</h3>
            
            <div className="pet-card-detailed__details">
                <p className="pet-card-detailed__species"><strong>Species:</strong> {pet.species}</p>
                <p className="pet-card-detailed__breed"><strong>Breed:</strong> {pet.breed || "Unknown"}</p>
                <p className="pet-card-detailed__age"><strong>Age:</strong> {pet.age} years old</p>
            </div>

            <div className="pet-card-detailed__actions">
                <Link to={`/pets/${pet.id}/edit`} className="pet-card-detailed__button">
                    Edit
                </Link>
            </div>
        </Link>
    );
}
