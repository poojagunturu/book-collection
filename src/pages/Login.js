import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hidden, setHidden] = React.useState(true);

    return(
        <main>            
            <div className="container">
                <h1 style={{margin: 8}}>User Login:</h1>
                <div className="inner-container">
                    <form>
                        <label>Username: </label>
                            <input 
                                name="userId"
                                value={userId}
                                onChange={e => {setUserId(e.target.value)}}
                                placeholder="Enter Username"
                            />
                        <br /><br />

                        <label>Password: </label>
                            <input 
                                type={hidden?"password":"text"}
                                name="password"
                                value={password}
                                onChange={e => {setPassword(e.target.value)}}
                                placeholder="Enter Password"
                            />
                        <br /><br />
                        <label>
                            <input 
                                type="checkbox" 
                                onChange={e => setHidden(!hidden)} 
                            /> Show Password
                        </label>
                        <br /><br />

                        <Link to="/SelectSearch">
                            <button>Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login