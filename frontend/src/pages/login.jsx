import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (evt) => {
        evt.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", // let server know that body is a string of json
            },
            body: JSON.stringify({ name: userName, password: userPassword}),
        })
        .then((resp) => {
            console.log(resp);
            navigate('/');
        })
        .catch((err) => console.error(err))
    }

    return (
        <div>
            <h1>Login here</h1>
            <form id='loginForm' onSubmit={handleLogin}>
                <input type="text" placeholder="username" name="name" id='loginName' onChange={(e) => setUserName(e.target.value)} value={userName}/>
                <input type="password" placeholder="password" name="password" id='loginPassword' onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;