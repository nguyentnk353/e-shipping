import { Route, Routes, Navigate } from 'react-router-dom';
import './App.less';
import GuestHome from './pages/guest/GuestHome/GuestHome';
import GuestService from './pages/guest/GuestService/GuestService';
import GuestCheckCharges from './pages/guest/GuestCheckCharges/GuestCheckCharges';
import UserHome from './pages/user/UserHome/UserHome';
import UserService from './pages/user/UserService/UserService';
import Guest from './pages/guest/Guest/Guest';
import User from './pages/user/User/User';
import Login from './pages/login-register/Login/Login';
import Register from './pages/login-register/Register/Register';
import { RolesAuthRoute } from './context/RolesAuthRoute';
import { Suspense } from 'react';
function App() {
  return (
    <div className='App'>
      <Routes>
        {/* public routes */}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/' element={<Guest />}>
          <Route path='home' element={<GuestHome />} />
          <Route path='service' element={<GuestService />} />
          <Route path='check-charge' element={<GuestCheckCharges />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* protected routes */}
        <Route
          path='/user'
          element={
            <Suspense fallback={<></>}>
              <RolesAuthRoute roles={['customer']}>
                <User />
              </RolesAuthRoute>
            </Suspense>
          }
        >
          <Route path='home' element={<UserHome />} />
          <Route path='service' element={<UserService />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
