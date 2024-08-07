import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [Err, setErr] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const handleAdd = async () => {

        await axios.get("http://localhost:12000/people").then((res) => {
            const datas = res.data;
            const users = datas.find(user => user.username === username && user.password === password);
            if(users){
                navigate('/task')
            } else {
                setErr(true);
            }
        })

    };

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
                            <input type="text" placeholder="Username" value={username} autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Password </legend>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                        </fieldset>
                        {Err && <p style={{color: "red"}}>Nom d'utilisateur ou mot de passe incorrect!</p>}
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