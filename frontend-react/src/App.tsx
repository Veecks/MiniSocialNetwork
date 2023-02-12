import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import services from './Services';
import { useContext } from 'react';
import { userContext } from './contexts/UserProvider';

function App() {
  const [user, setUser] = useContext(userContext)
  services.onAuthStateChange(() => setUser(services.getCurrentUser()))
  
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
