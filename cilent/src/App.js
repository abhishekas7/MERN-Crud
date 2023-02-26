

import NavBar from './components/NavBar.jsx';
import AllUser from './components/AllUser.jsx';
import AddUser from './components/AddUser.jsx';
import Mern from './components/Mern';
import EditUser from './components/EditUser.jsx';

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
   
      <BrowserRouter>
      <NavBar/>
      <Routes>
<Route path='/' element={<Mern/>}/>
<Route path='/add' element={<AddUser/>}/>
<Route path='/all' element={<AllUser/>}/>
<Route path='/edit/:id' element={<EditUser/>}/>
</Routes>
</BrowserRouter>
  
  );
}

export default App;
