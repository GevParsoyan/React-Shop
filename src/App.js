import './App.css';
import HomePage from './Home Page/HomePage';
import Navbar from './Nav Bar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ElectronicsPage from './Electronics/ElectronicsPage';
import JeweleryPage from './Jewelery/JeweleryPage';
import MenPage from './MenPage/MenPage';
import WomenPage from './WomenPage/WomenPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='Electronics' element={<ElectronicsPage />}/>
        <Route path='Jewelery' element={<JeweleryPage />}/>
        <Route path='Men' element={<MenPage />} />
        <Route path='Women' element={<WomenPage />} />
      </Routes>
    </div>
  );
}

export default App;
