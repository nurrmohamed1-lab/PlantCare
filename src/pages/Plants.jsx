import { useEffect, useState } from "react";

function Plants() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>

          <img
            src={plant.image}
            alt={plant.name}
            width="200"
          />
        </div>
      ))}
    </div>
  );
}

export default Plants;