import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username"  value={username}
    onChange={(e) => setUsername(e.target.value)}/>
    <input type="password" placeholder="Password"  value={password}
    onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login