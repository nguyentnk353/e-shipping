import { Route, Routes } from 'react-router-dom';
import './App.less';
import UserHome from './pages/user/UserHome/UserHome';
import UserService from './pages/user/UserService/UserService';
import GuestCheckCharges from './pages/guest/GuestCheckCharges/GuestCheckCharges';

function App() {
  const role = 'user';
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/service' element={<UserService />} />
        <Route path='/check-charge' element={<GuestCheckCharges />} />

      </Routes>
    </div>
  );
}

export default App;
