import { useState } from "react"
import  './Login.css'
import axios from "axios"
import { Navigate ,useNavigate} from "react-router-dom"



function Login({setIsLoggedIn}){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
const[isloading,setIsLoading]=useState(false)
const [error,setError]=useState("")
const navigate=useNavigate()
const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password
    });
    console.log(response.data);
    localStorage.setItem("token",response.data.accessToken)
    setIsLoggedIn(true)
    navigate("/home")
  }
   catch (error) {
    console.log(error)
    setError("Invaild username or password")
  }
   finally {
    setIsLoading(false);
  }
};
    return(
        
    <> 
    <div className="parent2">
    <div className="login-page">
  <div className="login-form">
    <h1>Welcome Back!</h1>
    <p>login to continue to your little garden</p>

    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          className="form-control"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className="form-control"
          placeholder="Enter your password"
        />
       {error&&<p className="text-danger">{error}</p>}

      </div>
      <button className="btn log-btn btn-primary">Login</button>
    </form>
  </div>
</div>
</div>
    </>

    )
}
export default Login