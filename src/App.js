import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from "./HomePage"
import Booking from "./Booking"

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Booking />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
