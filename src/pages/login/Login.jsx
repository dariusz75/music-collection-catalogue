import './login.scss';

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../firebase';
import { AuthContext } from '../../context/authContext';


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({ type: 'LOGIN', payload: user});
      navigate('/');
    })
    .catch((error) => {
      setError(true);
    });
  }

  return <div className='login'>
      <form onSubmit={ handleLogin } >
        <input 
          type='email' 
          placeholder='Email' 
          onChange={ (e) => setEmail(e.target.value) } 
        />
        <input 
          type='password' 
          placeholder='Password' 
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button type='submit'>Login</button>
        { error && <span>Wrong email or password</span> } 
      </form>
    </div>
};

export default Login;

