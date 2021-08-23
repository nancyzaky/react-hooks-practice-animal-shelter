import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, type, gender, age, name, weight, isAdopted } = pet;
  const [disabled, setDisable] = useState(isAdopted);

  return (
    <div className="card" data-testid="pet" key={id}>
      <div className="content">
        <span className="header">
          {gender === "female" ? "♀" : "♂"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className={disabled ? "ui disabled button" : "ui primary button"}
        >
          Already adopted
        </button>
        <button
          className={disabled ? "ui disabled button" : "ui primary button"}
          onClick={() => {
            onAdoptPet(id);
            setDisable(true);
          }}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
