
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Billing from './Billing';
import Password from './Password';
import Invitation from './Invitation';
import General from './General';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App p-6 flex  items-center bg-blue-300 min-h-screen ">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/invitaion' element={<Invitation/>}/>
        <Route path='/bill' element={<Billing/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
