import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPlant() {

  const { id } = useParams();

  const [plant, setPlant] = useState({
    name: "",
    image: "",
    difficulty: "",
    water: "",
    light: "",
    description: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/plants/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/plants/${id}`, plant)
      .then(() => {
        alert("Plant updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">

      <h2>Edit Plant</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={plant.name}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <input
          type="text"
          name="image"
          value={plant.image}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <select
          name="difficulty"
          value={plant.difficulty}
          onChange={handleChange}
          className="form-select mb-3"
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="text"
          name="water"
          value={plant.water}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <input
          type="text"
          name="light"
          value={plant.light}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <textarea
          name="description"
          value={plant.description}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <div className="d-flex justify-content-between">
        <button className="btn btn-warning">
          Update Plant
        </button>
        
        <button
  type="button"
  className="btn btn-danger"
  onClick={() => {
    axios.delete(`http://localhost:3000/plants/${id}`)
      .then(() => {
        alert("Plant deleted successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }}
>
  Delete Plant
</button>
</div>
      </form>
    </div>
  );
}

export default EditPlant;
