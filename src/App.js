import { Route, Routes } from 'react-router-dom';
import './App.less';
import Guest from './pages/guest/Guest/Guest';
import GuestCheckCharges from './pages/guest/GuestCheckCharges/GuestCheckCharges';
import GuestHome from './pages/guest/GuestHome/GuestHome';
import GuestService from './pages/guest/GuestService/GuestService';
import User from './pages/user/User/User';
import UserAddOrder from './pages/user/UserAddOrder/UserAddOrder';
import UserHome from './pages/user/UserHome/UserHome';
import UserService from './pages/user/UserService/UserService';

function App() {
  // const role = 'user';
  return (
    <div className='App'>
      <Routes>
        <Route path='/guest' element={<Guest />}>
          <Route path='home' element={<GuestHome />} />
          <Route path='service' element={<GuestService />} />
          <Route path='check-charge' element={<GuestCheckCharges />} />
        </Route>
        <Route path='/user' element={<User />}>
          <Route path='home' element={<UserHome />} />
          <Route path='service' element={<UserService />} />
          <Route path='create-new-order' element={<UserAddOrder />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;