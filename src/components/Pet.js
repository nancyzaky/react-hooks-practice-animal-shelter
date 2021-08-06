import React, { useState } from "react";

function Pet({ pet }) {
  const { id, type, gender, age, name, weight, isAdopted } = pet;
  const [disable, setDisable] = useState(false);
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
          className={disable ? "ui disabled button" : "ui primary button"}
        >
          Already adopted
        </button>
        <button
          className={disable ? "ui disabled button" : "ui primary button"}
          onClick={() => {
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
