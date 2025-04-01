import { useState } from "react";
import { useLoaderData,useActionData, useNavigation, redirect,Form } from "react-router-dom"
import { loginUser } from "../functions/api";
import hide from '../assets/images/hide.png';
import view from '../assets/images/view.png';


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}
export async function action({ request }) {
    try{
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const redirectTo = new URL(request.url).searchParams?.get("redirectTo") || '/host'
    const data = await loginUser({ email, password })

    return redirect(redirectTo)}
    catch(err){
        return err
    }

}
const Login = ()=>{


    const error = useActionData();
    const message = useLoaderData();

    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const navigation = useNavigation();

    return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3 className="red">{message}</h3>}
                {error && <h3 className="red">{error.message}</h3>}
                <Form className="login-form" method="post" replace>
                    <input 
                    type="email" 
                    name="email"
                    placeholder="email" 
                    required/>

                    <div className="password-container">                
                        <input 
                        type={passwordVisibility ?"text":"password"} 
                        name="password" 
                        placeholder="password" 
                        required/>
                        
                        {formdata.password &&  
                        <img 
                        src={passwordVisibility? hide : view} 
                        alt="change visibility of input" 
                        onClick={() => setPasswordVisibility((prev) => !prev)}
                        /> }  
                    </div>
                    <button 
                        disabled={navigation.state === "submitting"}
                    >   {navigation.state === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
                </Form>
            </div>
    )}

export default Login;
