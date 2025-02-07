import "./BehaviorForm.scss";

export default function BehaviorForm({ behavior, handleChange, handleSubmit, handleDelete, pets, selectedPet, setSelectedPet }) {
	return (
		<form className="behavior-form" onSubmit={handleSubmit}>
			{pets && (
				<>
					<label htmlFor="pet">Select Pet:</label>
					<select
						id="pet"
						value={selectedPet}
						onChange={(e) => setSelectedPet(e.target.value)}
						required
					>
						<option value="">-- Select a Pet --</option>
						{pets.map((pet) => (
							<option key={pet.id} value={pet.id}>
								{pet.name}
							</option>
						))}
					</select>
				</>
			)}

			<label htmlFor="description">Behavior:</label>
			<textarea
				id="description"
				name="description"
				placeholder="Describe the behavior..."
				value={behavior.description}
				onChange={handleChange}
				required
			/>

			<label htmlFor="date">Date:</label>
			<input
				type="date"
				id="date"
				name="date"
				value={behavior.date}
				onChange={handleChange}
				required
			/>

			<div className="behavior-form__buttons">
				<button type="submit">Save</button>
				<button type="button" className="behavior-form__delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</form>
	);
}
