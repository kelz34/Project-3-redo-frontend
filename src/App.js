import './App.css';
import { Route, Routes } from "react-router-dom";
import Sunday from './pages /Sunday';
import Monday from './pages /Monday';
import Tuesday from './pages /Tuesday';
import Wednesday from './pages /Wednesday';
import Thursday from './pages /Thursday';
import Friday from './pages /Friday';
import Saturday from './pages /Saturday';
import Dailylogs from './pages /Dailylogs';
import Nav from './components /nav';

function App() {
  return (
    <div className="App">
       <Nav />
      <Routes>
        <Route path="/" element={<Dailylogs/>}/>
        <Route path="/sunday" element={<Sunday />}/>
        <Route path="/monday" element={<Monday />}/>
        <Route path="/tuesday" element={<Tuesday />}/>
        <Route path="/wednesday" element={<Wednesday />}/>
        <Route path="/thursday" element={<Thursday />}/>
        <Route path="/friday" element={<Friday />}/>
        <Route path="/saturday" element={<Saturday />}/>
      </Routes>
    </div>
  );
}

export default App;
