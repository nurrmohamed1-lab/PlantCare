import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("myPlants")) || [];
    setMyPlants(savedPlants);
  }, []);
const deletePlant = (id) => {
  const updatedPlants = myPlants.filter(
    (plant) => plant.id !== id
  )
  setMyPlants(updatedPlants)
  localStorage.setItem(
    "myPlants",
    JSON.stringify(updatedPlants)
  );
};
  return (
    <>
    <div className="container py-5">
           <Link to="/home">
      <button className=" btn details-btn"><i className="bi bi-house"></i></button>
      </Link>
      <h2 className="text-center mb-4">My Plants 🍀</h2>
  <div className="row g-4">
        {myPlants.map((plant) => (
        <div className="col-lg-3 col-md-6 col-12" key={plant.id}>
        
                <div className="card h-100 shadow-sm">
                  <img
                    src={plant.image}
                    className="card-img-top plant-img"
                    alt={plant.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{plant.name}</h5>
                    <p className="card-text">
                      Difficulty: {plant.difficulty}
                    </p>
                  <p className="card-text">Water Needs:{plant.water}</p>
                  <div className="d-flex justify-content-between ">
                  <Link to={`/details/${plant.id}`}>
                    <button className="btn details-btn">
                      View Details
                    </button>
                    </Link>
                    <button className="btn btn-danger" onClick={()=>{deletePlant(plant.id)}}>
                    <i className="bi bi-trash"></i>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
        ))}
      </div>
   
    </div>
    </>
  )
  }

export default MyPlants;