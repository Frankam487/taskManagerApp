import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const handleAdd = () => {
       

          
    };

    navigate('/task');


    return (
        <div className="login">
            <div className="login-container">
                <h1>Hello!</h1>
                <h5>Fil in your username and your password to sign in</h5>
                <span>Error</span>
                <div className="form-container">
                    <form action="">
                        <fieldset>
                            <legend>Username </legend>
                            <input type="text" placeholder="Username" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Password </legend>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" />
                        </fieldset>
                    </form>
                </div>
                <span>bar</span>
                <button onClick={handleAdd}>SIGN IN</button>
                <Link to="/registration">DON'T HAVE AND ACCOUNT? SIGN UP NOW</Link>
            </div>
        </div>
    );

}

export default Login;