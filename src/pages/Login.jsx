import { Link } from "react-router-dom";

const Login = () => {
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
                            <input type="text" />
                        </fieldset>
                        <fieldset>
                            <legend>Password </legend>
                            <input type="password" />
                        </fieldset>
                    </form>
                </div>
                <span>bar</span>
                <button>SIGN IN</button>
                <Link to="/registration">DON'T HAVE AND ACCOUNT? SIGN UP NOW</Link>
            </div>
        </div>
    );
}

export default Login;