import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Navbar from './components/Navbar';
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
    <div className="App m-auto h-full max-h-full fixed w-full bg-pri-50 text-black text-center overflow-y-auto">
      <Header/>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
