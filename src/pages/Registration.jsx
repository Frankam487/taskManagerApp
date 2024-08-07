import { useState } from "react";

const Registration = () => {
    const [nameErr, setNameErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [confirmPass, setConfirmPass] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if( name === ""){
        setNameErr(true)
        } else if (password === ""){
            setpasswordErr(true);
        } else if (password !== passwordConfirm) {
            setConfirmPass(true);
        } else {
            console.log('ok');
        }

    }
    return (
        <div className="registration">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" autoComplete="off" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    {nameErr && <p>Le nom ne doit pas etre vide</p>}
                    <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password" />
                    <br />
                    {passwordErr && <p>Le mot de passe ne doit pas etre vide</p>}

                    <label htmlFor="">Confirm-pass</label>
                    <input autoComplete="off" value={passwordConfirm} type="password" onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Confirm the password" /> <br />
                    {confirmPass && <span>Les mots de passe ne correspondent pas !</span>}
                    <input type="submit" value="ADD" />
                </form>
            </div>
        </div>
    );
}

export default Registration;