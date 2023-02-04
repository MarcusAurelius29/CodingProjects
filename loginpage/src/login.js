import React, { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError("Please enter the missing email or password")
        }
    }

    return (
        <div>
            <h1 align='center'>Login Page</h1>
            <br></br>

            {error && <p className="error-message" align='center'>{error}</p>}

            <form align="center" onSubmit={handleSubmit}>

                <label htmlFor="Email">Enter your email</label>
                <input type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                ></input>
                <br></br>
                <label htmlFor="Password">Enter your password</label>
                <input type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                ></input>
                <br></br>


                <button type="submit">Submit</button>

            </form>

        </div >
    )

}


export default LoginPage