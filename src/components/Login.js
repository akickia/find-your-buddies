import {useState} from "react";

const Login = () =>{
    return(
        <div>
            <label>Your badass name</label>
            <input autofocus type = "text" name ="name" id ="name"></input>
            <label>Password</label>
            <input type = "password" name ="password" id="password"></input>
            <button>Log me right in!</button>
        </div>
    );
};

export default Login;