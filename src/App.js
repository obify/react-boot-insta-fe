import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
