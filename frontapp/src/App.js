
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './main.app/Home';
import About from './main.app/About';
import Registration from './main.app/Registration';
import Login from './main.app/Login';
import Adlogin from './main.app/Adlogin';
import userDash from './userapp/Dash';
import Dash from './userapp/Dash';
import AddQuery from './userapp/AddQuery';
import ViewPenQuery from './userapp/ViewPenQuery';
import Addash from './adminapp/Addash';
import Viewalluser from './adminapp/Viewalluser';
import Viewallpenquery from './adminapp/Viewallpenquery';
import Viewallproquery from './adminapp/Viewallproquery';
import Viewallcomquery from './adminapp/Viewallcomquery';
import ViewProQuery from './userapp/ViewProQuery';
import ViewComQuery from './userapp/ViewComQuery';


function App() {
  return (
   <>
   <div className='container-fluid'>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      
      <Route path="/about" element={<About/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adlogin' element={<Adlogin/>}/>
      <Route path='/userDash/:id' element={<Dash/>}/>
      <Route path='/addQuery/:id' element={<AddQuery/>}/>
      <Route path='/viewPenQuery/:id' element={<ViewPenQuery/>}/>
      <Route path='/viewProQuery/:id' element={<ViewProQuery/>}/>
      <Route path='/viewComQuery/:id' element={<ViewComQuery/>}/>
      <Route path='/addash' element={<Addash/>}/>
      <Route path='/viewalluser' element={<Viewalluser/>}/>
      <Route path='viewallpenquery' element={<Viewallpenquery/>}/>
      <Route path='viewallproquery' element={<Viewallproquery/>}/>
      <Route path='viewallcomquery' element={<Viewallcomquery/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
   </>
  );
}

export default App;
