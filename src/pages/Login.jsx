const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>Hello!</h1>
                <h5>Fil in your username and your password to sign in</h5>
                <span>Error</span>
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
        </div>
    );
}

export default Login;