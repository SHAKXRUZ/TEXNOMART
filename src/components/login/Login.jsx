import './Login.css';
import { useRef, useState } from "react";
import { signup, logout, useAuth } from "../../firebase/config";
import { FiX } from 'react-icons/fi';
const Login = ({ setLoginOpen }) => {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    console.log(currentUser);
    async function handleSignup() {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    const cler = () => {
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return (
        <div className='login'>
            <div onClick={() => setLoginOpen(false)} className='login-overlow'></div>
            <div className="login-container">
                <div className='login-top'>
                    <p className='login-title'>Kirish</p>
                    <p onClick={() => setLoginOpen(false)} className='login-exit'><FiX /></p>
                </div>
                <form className='login-form'>
                    <input className='login-input' required type="email" ref={emailRef} placeholder="Login" />
                    <input className='login-input' required type="password" ref={passwordRef} placeholder="Parol" />
                    <button className='login-btn' disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
                    <button className='login-btn1' disabled={loading || !currentUser} onClick={() => { handleLogout() && cler() }}>Account exit</button>
                </form>
            </div>
        </div >
    )
}
export default Login;