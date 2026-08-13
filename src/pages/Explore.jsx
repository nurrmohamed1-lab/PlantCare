import axios from "axios";
import React, { useEffect, useState } from "react";
import './Explore.css'
import Loading from "../components/Loading";
import Details from "./Details";
import { Link } from "react-router-dom";

function Explore(){
    const [plants,setPlants]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("http://localhost:3000/plants")
        .then((response)=>{
            setPlants(response.data) 
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    const [difficulty,setDifficluty]=useState("all")
    const filteredPlants = plants.filter((plant) => {
  return difficulty === "all" || plant.difficulty === difficulty;
});
if(loading){
    return (
        <div className="container">
         <div className="row g-3 p-4">
            <Loading/>
         </div>
        </div>
    )
  }
    return(
    <>
    <div className="container mt-4">
  <div className="row mb-4 align-items-end">
    <div className="col-md-4">
      <label className="form-label fw-bold">
        Difficulty
      </label>
      <select className="form-select" value={difficulty}
      onChange={(e)=>{
        setDifficluty(e.target.value)
      }}>
        <option value="all">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
    <div className="col-md-8 my-2 d-flex justify-content-end">
      <Link to="/home"><button className=" btn details-btn"><i className="bi bi-house"></i></button></Link>
    </div>
  </div>
</div>
<div className="container">
  <div className="row g-4">

    {filteredPlants.map((plant) => (
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
          <Link to={`/details/${plant.id}`}>
            <button className="btn details-btn">
              View Details
            </button>
            </Link>
          </div>
        </div>

      </div>
    ))}

  </div>
</div>

    </>
    )
}
export default Explore