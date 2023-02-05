import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnOvsQPkCNbh9wOJHnkRqbdCx_yy8PEt4",
  authDomain: "miniblog-projeto.firebaseapp.com",
  projectId: "miniblog-projeto",
  storageBucket: "miniblog-projeto.appspot.com",
  messagingSenderId: "938611821213",
  appId: "1:938611821213:web:db0f20bf14c6d977962274"
};

const FireApp = initializeApp(firebaseConfig);
const db = getFirestore(FireApp);
const auth = getAuth();


function App() {
  const [user, setUser] = useState(auth.currentUser)
  auth.onAuthStateChanged((usr) => setUser(usr))
  return (
    <div className="App">
      <h2>MiniBLOG</h2>
      <p>{user ? user.email || '' : 'Esse é um projeto de estudo!'}</p>
      <Router>
        <Link to='/'>Home</Link>
        { !user &&
          <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Registrar-se</Link>
          </>
        }
        {user && <Link to='/' onClick={() => signOut(auth)}>Sair</Link>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>

        
      </Router>
    </div>
  )
}

export default App
