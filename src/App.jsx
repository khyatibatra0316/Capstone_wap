import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import LoginPage from './components/Login'; 
import Home from './components/Home';
import Main from './components/MainFile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path= "/main" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
