import "./login.scss";
import {useState} from 'react';

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const navitage = useNavigate();

    const handleLogin = (e) =>{
            e.preventDefault();


           signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
              })
              .catch((error) => {
                setError(true);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
    }



    return ( 
        <div className="login">
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="email" id="email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" id="password" onChange={e=>setPassword(e.target.value)}/>
            <button className="submit">Login</button>
            {error &&<span>Wrong email or password</span>}
        </form>
    </div> 
     );
}
 
export default Login;