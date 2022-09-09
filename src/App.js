import { Route, Routes } from 'react-router-dom';
import './App.css';
import Staff from './components/Staff';
import Ships from './components/Ships';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddStaff from './components/AddStaff';
import AddShip from './components/AddShip';
// import Edit from './pages/user/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/staff" exact element={<Staff/>} />
        <Route  path="/ships" exact element={<Ships/>} />
        <Route  path="/add-staff" exact element={<AddStaff/>} />
        <Route  path="/add-ship" exact element={<AddShip/>} />
        {/* <Route  path="/edit-user/:id" exact element={<Edit/>} /> */}
      </Routes>
    </div>
  );
}

export default App;