import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import { loginUser } from "../functions/api";
import hide from '../assets/images/hide.png'
import view from '../assets/images/view.png'


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}
const Login = ()=>{
const [passwordVisibility,setPasswordVisibility] = useState(false)
const[formdata,setFormData] = useState({email:'',password:''})
const [status, setStatus] = React.useState("idle")
const [error, setError] = React.useState(null)
const message = useLoaderData()

const handleChange =(event)=>{
const {name , value} = event.target;
setFormData(prevData=>( {
    ...prevData,
    [name]: value
}
))
}

const handleSubmit = (e)=>{
    e.preventDefault()
    setStatus("submitting")
    setError(null)
    loginUser(loginFormData)
        .then(data => console.log(data))
        .catch(err => setError(err))
        .finally(() => setStatus("idle"))
    setFormData({email:'',password:''});
    setPasswordVisibility(false)
}
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                type="email" 
                name="email"
                 placeholder="email" 
                 onChange={handleChange} 
                 value={formdata.email}
                 required/>

                <div className="password-container">                
                    <input 
                    type={passwordVisibility ?"text":"password"} 
                    name="password" 
                    placeholder="password" 
                    value={formdata.password}
                    onChange={handleChange} 
                    required/>
                    
                    {formdata.password &&  
                    <img 
                    src={passwordVisibility? hide : view} 
                    alt="change visibility of input" 
                    onClick={() => setPasswordVisibility((prev) => !prev)}
                    /> }  
                </div>
                <button 
                    disabled={status === "submitting"}
                >   {status === "submitting" 
                    ? "Logging in..." 
                    : "Log in"
                }
            </button>
            </form>
        </div>
    )}

export default Login;
