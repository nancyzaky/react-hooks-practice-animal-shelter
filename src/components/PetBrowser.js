import React, { useState } from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      <ul>
        {pets.map((pet) => {
          return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />;
        })}
      </ul>
    </div>
  );
}

export default PetBrowser;

// const [cats, setCats] = useState([]);
// const [dogs, setDogs] = useState([]);
// const [micropig, setMicropig] = useState([]);
// const fetchUrl = () => {
//   fetch("http://localhost:3001/pets")
//     .then((resp) => resp.json())
//     .then((data) => {
//       const cats = data.filter((pet) => {
//         return pet.type === "cat";
//       });
//       const dogs = data.filter((pet) => {
//         return pet.type === "dog";
//       });
//       const micropig = data.filter((pet) => {
//         return pet.type === "micropig";
//       });
//       setCats(cats);
//       setDogs(dogs);
//       setMicropig(micropig);
//     });
// };
// useEffect(() => {
//   fetchUrl();
// }, []);
