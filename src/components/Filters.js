import React, { usestae } from "react";

function Filters({ filters, setFilters, pets, setPets }) {
  console.log(pets);
  const handleChange = (e) => {
    setFilters({ type: e.target.value });
  };
  const handleSub = () => {
    fetch("http://localhost:3001/pets")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (filters.type === "all") {
          setPets(data);
        } else {
          setPets(
            data.filter((pet) => {
              return pet.type === filters.type;
            })
          );
        }
      });
    console.log(pets);
  };

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleSub}>
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
