import React from "react"
import './Home.css'
import Monstra from '../assets/Monstra.png'
import Explore from "./Explore"
import { Link } from "react-router-dom"
function Home(){
return(
    <>
    <div className="parent">
    <div className="content">
        <div className="child1">
       <h1>Meet your plants.</h1>
       <h1 className="k">Know what <br></br> they need</h1>
       <p>Take better care of your <br></br>little green friends </p>
       <div className="button">
    <Link to="/explore">
       <button className="Explorebtn">Explore plants</button> 
       </Link>
       <Link to="/myplant">
       <button className="Myplantbtn">My Plants</button>
       </Link>
       </div>
       </div>
       <div className="child2">
        <img src={Monstra} ></img>
       </div>
    </div>
       <div className="random">
        <div className="content2">
        <div className="details">
        <p>Beginner-Friendly Plants☘</p>
        <h2>Pilea Peperomioides</h2> 
        <p>Also Known as the chiense Money plant.</p>
        <p>Easy to care and Perfect for beginners!</p>
      <Link to="/details/2">
        <button>View Plant</button>
        </Link>
        </div>
        <div className="image1">
            <img src="https://i.pinimg.com/1200x/ad/96/5f/ad965fc513e607ee0132567c24413622.jpg" ></img>
        </div>
        </div>
       </div>
       </div>
    </>
)}
export default Home