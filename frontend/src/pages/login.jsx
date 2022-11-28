// import { useState } from 'react';


// function Login() {

//     const [userName, setUserName] = useState('');
//     const [userPassword, setUserPassword] = useState('');

//     const handleLogin = (evt) => {
//         evt.preventDefault();
//         fetch('/login', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json", // let server know that body is a string of json
//             },
//             body: JSON.stringify({ name: userName, password: userPassword}),
//         })
//         .then((resp) => {
//             console.log(resp);
//             if (resp.redirected) {
//                 window.location.href = resp.url;
//             }
//         })
//         .catch((err) => console.error(err))
//     }

//     return (
//         <div>
//             <h1>Login here</h1>
//             <form id='loginForm' onSubmit={handleLogin}>
//                 <input type="text" placeholder="username" name="name" id='loginName' required minLength={2} maxLength={32} onChange={(e) => setUserName(e.target.value)} value={userName}/>
//                 <input type="password" placeholder="password" name="password" id='loginPassword' required minLength={8} maxLength={50} onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
//                 <button type="submit">Create user</button>
//             </form>
//         </div>
//     )
// }

// export default Login;