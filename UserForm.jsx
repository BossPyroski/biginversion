import React, { useState } from 'react';


const UserForm = props => {
    const { inputs, setInputs } = props;
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastname] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

const onChange = e => {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    });
};
    // }
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { username, firstName, lastName, email, password, confirmPassword };
    //     console.log("Welcome", newUser);
    // };

    return (
        // <form onSubmit={createUser}>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input onChange={onChange} type="text" name="username" value={inputs.username}/>
                {inputs.username.length < 3 && inputs.username.length >0?
                <p>Username has to be at least three characters!</p>: "" }


            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input onChange={onChange} type="text" name="firstName" />
                {inputs.firstName.length < 3 && inputs.firstName.length >0?
                <p>First name has to be at least three characters!</p>: "" }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={onChange} type="text" name="lastName" />
                {inputs.lastName.length < 3 && inputs.lastName.length >0?
                <p>Last name has to be at least three characters!</p>: "" }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address: </label>
                <input onChange={onChange} name="email" type="email" />
                {inputs.email.length < 3 && inputs.email.length >0?
                <p>Email has to be at least three characters!</p>: "" }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input onChange={onChange} type="text" name="password" />
                {inputs.password.length < 3 && inputs.password.length >0?
                <p>password has to be at least 3 characters!</p>: "" }
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">confirm Password: </label>
                <input onChange={onChange} type="text" name="confirmPassword" />
                {inputs.confirmPassword===inputs.password?"":
                <p>Passwords have to match!</p> }
            </div>

        </form>
    );
};

export default UserForm;
