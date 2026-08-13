import React, { useState } from "react";
import axios from "axios";

function AddPlant() {

  const [plant, setPlant] = useState({
    name: "",
    image: "",
    difficulty: "",
    water: "",
    light: "",
    description: ""
  });

  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/plants", plant)
      .then(() => {
        alert("Plant added successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">

      <h2>Add New Plant</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Plant Name"
          value={plant.name}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
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
          placeholder="Water Needs"
          value={plant.water}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <input
          type="text"
          name="light"
          placeholder="Light Needs"
          value={plant.light}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={plant.description}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button className="btn btn-success">
          Add Plant
        </button>

      </form>

    </div>
  );
}

export default AddPlant;