import React, { useState, ChangeEvent } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "./firebase";

const Login: React.FC = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ signInWithEmailAndPassword, userLoading, userError ] = useSignInWithEmailAndPassword(auth);


  const login = async () => {
    console.log(email, password)
    try {
      const user = await signInWithEmailAndPassword(email, password);
      console.log(user?.user)
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };



  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>

  );
}

export default Login;
