import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log(newUser)
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <3){
            setFirstNameError("Must be more than 2 characters");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length <3){
            setLastNameError("Must be more than 2 characters");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <6){
            setEmailError("Must be more than 5 characters");
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password !== confirmPassword) {
            setPasswordError('Passwords must match');
        }
        else if (e.target.value.length < 8) {
            setPasswordError('Password must be 8 characters');
        }
        else{
            setPasswordError("")
        }
    }



    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName}/>
                    {
                        firstNameError ?
                        <p style={{color:"red"}}>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName}/>
                    {
                        lastNameError ?
                        <p style={{color:"red"}}>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail} />
                    {
                        emailError ?
                        <p style={{color:"red"}}>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        passwordError ?
                        <p style={{color:"red"}}>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm