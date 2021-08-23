import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const changeFilter = ({ type: val }) => {
    setFilters({ type: val });
  };
  const onAdoptPet = (key) => {
    fetch(`http://localhost:3001/pets/${key}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isAdopted: "true",
      }),
    });
  };
  const changeAnimals = () => {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
        .then((resp) => resp.json())
        .then((data) => {
          setPets(data);
        });
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then((resp) => resp.json())
        .then((data) => {
          setPets(data);
        });
    }
  };
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              filters={filters}
              changeFilter={changeFilter}
              changeAnimals={changeAnimals}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
