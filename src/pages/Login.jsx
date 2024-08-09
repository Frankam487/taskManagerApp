import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [Err, setErr] = useState(false);
    const [password, setPassword] = useState("");

    const handleAdd = async () => {

        await axios.get("http://localhost:12000/people").then((res) => {
            const datas = res.data;
            const users = datas.find(user => user.name === username && user.password === password);
            if (users) {
                alert("connexion reussie");
                navigate('/task');
            } else {
                setPassword("");
                setUsername("");
                setErr(true);
            }

        })

    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="head">
                    <h1>Hello!</h1>
                    <h5>Fil in your username and your password to sign in</h5>
                </div>
                {Err && <div className={Err ? "error" : ""}>
                    <h4>Oops!</h4>
                    <p>Nom d'utilisateur ou mot de passe incorrect !!</p>
                </div>}
                <div className="form-container">
                    <form action="" autoComplete="off">
                        <fieldset>
                            <legend>Username </legend>
                            <input type="text" placeholder="Username" value={username} autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Password </legend>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />

                        </fieldset>

                    </form>
                </div>
                <span></span>
                <div className="login-btns">
                    <button onClick={handleAdd}>SIGN IN</button>
                    <Link to="/registration">DON'T HAVE AND ACCOUNT? SIGN UP NOW</Link>
                </div>
            </div>
        </div>
    );

}

export default Login;