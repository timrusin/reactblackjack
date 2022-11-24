import { Routes, Route } from 'react-router-dom'
import './App.css';
import Game from './Game';
import Title from './Title';

function App() {
  
  return ( 
    <div className="App">
          <Routes>
              <Route path='/' element={<Title/>} />
              <Route path="/game" element={<Game/>} />
          </Routes>
    </div>
  );
}
 
export default App;
