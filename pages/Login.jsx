import { useState } from "react";
import hide from '../assets/images/hide.png'
import view from '../assets/images/view.png'

const Login = ()=>{
const [passwordVisibility,setPasswordVisibility] = useState(false)
const[formdata,setFormData] = useState({email:'',password:''})
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
console.log(formdata);
setFormData({email:'',password:''});
setPasswordVisibility(false)
}
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
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
                <button>Log in</button>
            </form>
        </div>
    )}

export default Login;