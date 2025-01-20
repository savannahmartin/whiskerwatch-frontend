import "./PetForm.scss";

export default function PetForm({ pet, handleChange, handleSubmit }) {
	return (
		<form className="pet-form" onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				placeholder="Name"
				value={pet.name}
				onChange={handleChange}
				required
			/>

			<label htmlFor="species">Species:</label>
			<input
				type="text"
				id="species"
				name="species"
				placeholder="Species"
				value={pet.species}
				onChange={handleChange}
			/>

			<label htmlFor="breed">Breed:</label>
			<input
				type="text"
				id="breed"
				name="breed"
				placeholder="Breed"
				value={pet.breed}
				onChange={handleChange}
			/>

			<label htmlFor="age">Age:</label>
			<input
				type="number"
				id="age"
				name="age"
				placeholder="Age"
				value={pet.age}
				onChange={handleChange}
			/>

			<label htmlFor="notes">Additional Information:</label>
			<textarea
				id="notes"
				name="notes"
				placeholder="Any extra details about your pet..."
				value={pet.notes || ""}
				onChange={handleChange}
			/>

			<button type="submit">Save</button>
		</form>
	);
}
