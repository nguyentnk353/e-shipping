import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import './App.less';
import { UserNavbar } from './components/UserNavbar/UserNavbar';
import User from './pages/user/User';
import UserHome from './pages/user/UserHome/UserHome';
import UserService from './pages/user/UserService/UserService';

function App() {
  const role = 'user';
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/service' element={<UserService />} />
      </Routes>
    </div>
  );
}

export default App;
