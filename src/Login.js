import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login(){
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(value==="")
        {
            setIsValidEmail(true)
        }
        else{
        setIsValidEmail(emailRegex.test(value));
        }
    };
    function handleSubmit(){
        console.log("hello");
        navigate("/finish");
    }
    return <div className="outer">
        <div className="text">
        <p className="upper">Registaration Form</p>
        <p className="lower">Start your Success journey here</p>
        </div>
        <div className="form">
        <input className="name" placeholder="Enter Your Name"></input>
        <input className="email" type="email" placeholder="Enter your Email" value={email} onChange={handleChange}></input>
        {!isValidEmail && email!="" && <p className="error">Please enter a valid email address</p>}
        <button className="but" type="submit" disabled={!isValidEmail} onClick={handleSubmit}>Submit</button>
        </div>
    </div>
}
export default Login;