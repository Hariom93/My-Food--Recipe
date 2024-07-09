
import { Route,Routes } from 'react-router';
import Success from './pages/Success';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Loginfrom from './components/Loginfrom';
import Signinfrom from './components/Signinfrom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path="/success" element={<ProtectedRoute children={<Success/>}/>}/>
      <Route path='/signin' element={<Signinfrom/>}/>
      <Route path='/login' element={<Loginfrom/>}/>
    </Routes> 
  );
}

export default App;
