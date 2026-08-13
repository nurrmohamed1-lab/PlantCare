import axios from "axios";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import Explore from "./Explore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Details(){
      const { id } = useParams();
      const[plant,setPlant]=useState(null)
  useEffect(() => {
    axios.get(`http://localhost:3000/plants/${id}`)
      .then((response) => {
        setPlant(response.data)
      });
  }, [id]);
  if(!plant){
    return <p>Loading...</p>
  }
  const addToMyPlants=()=>{
    const savedPlants =
    JSON.parse(localStorage.getItem("myPlants")) || [];

  const alreadyExists = savedPlants.some(
    (item) => item.id === plant.id
  );

  if (alreadyExists) {
    toast.info("This plant is already in My Plants ")
    return;
  }
  const updatedPlants = [...savedPlants, plant];
  localStorage.setItem("myPlants", JSON.stringify(updatedPlants))
  toast.success("Plant added to My Plants ")
  }
    return(
        <> 
          <div className="container py-5 d-flex justify-content-center">
    <div className="card mb-3 shadow" style={{maxWidth:"800px",}}>
       <div className="row g-0">
       <div className="col-12 col-md-4">
      <img src={plant.image} className="img-fluid rounded-start w-100 h-100" alt={plant.name} ></img>
    </div>
    <div className="col-12 col-md-8">
      <div className="card-body d-flex flex-column "> 
        <div>
        <h2 className="card-title">{plant.name}</h2>
        <p className="card-text">Difficulty: {plant.difficulty}</p>
        <p className="card-text">Water Needs: {plant.water}</p>
        <p className="card-text">Light: {plant.light}</p>
        <p className="card-text">Category: {plant.category}</p>
        <p className="card-text">Description: {plant.description}</p>
        <h4 className="card-text">Care Tips:</h4>
        <ul>
            {plant.careTips.map((tip,index)=>(
                <li key={index}>{tip}</li>
            )
            )}
        </ul>
        </div>
        <div className="d-flex  justify-content-between">
        <button style={{backgroundColor:"#1e4f1e"
            ,color:"white",
            border:"none", borderRadius:"10px",padding:"10px"}} onClick={addToMyPlants}>Add to my Plant</button>
            <Link to="/explore">
            <button style={{backgroundColor:"white"
            ,color:"#1e4f1e",
            border:"1px solid #1e4f1e", borderRadius:"10px",padding:"10px"}}>Back to Explore</button>
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}
export default Details