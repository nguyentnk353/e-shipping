import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import './App.less';
import { GuestNavbar } from './components/GuestNavbar/GuestNavbar';
import User from './pages/user/User';
import GuestHome from './pages/guest/GuestHome/GuestHome';
import GuestService from './pages/guest/GuestService/GuestService';
import GuestFooter from './components/GuestFooter/GuestFooter';

function App() {
  const role = 'user';
  return (
    <div className='App'>
      <GuestNavbar />
      <Routes>
        <Route path='/' element={<GuestHome />} />
        <Route path='/home' element={<GuestHome />} />
        <Route path='/service' element={<GuestService />} />
      </Routes>
      <GuestFooter />
    </div>
  );
}

export default App;
