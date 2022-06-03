import {useState} from "react";

const Login = () =>{

    const [userInfo, setUserInfo] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({...userInfo, [name]: value});

        console.log(userInfo);
    }; 


    

    return(
        <div className = "container">
            <h2>Log in</h2>
            <h3>so that you can start finding your buddies!</h3>

            <form className = "form">
                <label htmlFor="userName" >What's your name?</label>
                <input
                onChange={handleChange}
                type = "text"
                name = "userName"
                id = "userName"
                value = {userInfo.userName}
                />
                <label htmlFor="password" >What's your password?</label>
                <input
                onChange={handleChange}
                type = "password"
                name = "password"
                id = "password"
                value = {userInfo.password}
                />
                <button>Log me in!</button>
            </form>
            
        </div>
    );
};

export default Login;