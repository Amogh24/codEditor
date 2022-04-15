import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import CodingPage from './pages/CodingPage';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route path = "/coding/:roomId" element={<CodingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
