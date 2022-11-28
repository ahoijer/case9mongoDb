import { useState } from 'react';


function Register() {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleRegister = (evt) => {
        evt.preventDefault();
        fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", // let server know that body is a string of json
            },
            body: JSON.stringify({ name: userName, password: userPassword}),
        })
        .then((resp) => {
            console.log(resp);
            if (resp.redirected) {
                window.location.href = resp.url;
            }
        })
        .catch((err) => console.error(err))
    }

    return (
        <div>
            <h1>Register your account here</h1>
            <form id='registerForm' onSubmit={handleRegister}>
                <input type="text" placeholder="username" name="name" id='registerName' required minLength={2} maxLength={32} onChange={(e) => setUserName(e.target.value)} value={userName}/>
                <input type="password" placeholder="password" name="password" id='registerPassword' required minLength={8} maxLength={50} onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
                <button type="submit">Create user</button>
            </form>
        </div>
    )
}

export default Register;