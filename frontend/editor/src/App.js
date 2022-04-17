import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import CodingPage from './pages/CodingPage';
import {Toaster} from 'react-hot-toast';
import Compiler from './pages/Compiler';
function App() {
  return (
  <>
    <div>
      <Toaster
        position ="top-right"
        toastOptions={{
          success:{
            theme:{
              primary:'#4aed88',
            }
          }
        }}
      ></Toaster>
    </div>
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route path = "/coding/:roomId" element={<CodingPage/>}></Route>
        <Route path = "/compiler" element={<Compiler/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
