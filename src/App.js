import { Route, Routes, Navigate } from 'react-router-dom';
import './App.less';
import Guest from './pages/guest/Guest/Guest';
import GuestCheckCharges from './pages/guest/GuestCheckCharges/GuestCheckCharges';
import GuestHome from './pages/guest/GuestHome/GuestHome';
import GuestService from './pages/guest/GuestService/GuestService';
import User from './pages/user/User/User';
import UserAddOrder from './pages/user/UserAddOrder/UserAddOrder';
import UserHome from './pages/user/UserHome/UserHome';
import UserService from './pages/user/UserService/UserService';
import Login from './pages/login-register/Login/Login';
import Register from './pages/login-register/Register/Register';
import { RolesAuthRoute } from './context/RolesAuthRoute';
import { Suspense } from 'react';
import UserViewBills from './pages/user/UserViewBills/UserViewBills';
import ManagerHome from './pages/manager/ManagerHome/ManagerHome';
import LoginEmployee from './pages/login-register/LoginEmployee/LoginEmployee';
import Manager from './pages/manager/Manager/Manager';
import UserAccount from './pages/user/UserAccount/UserAccount';
import UserUpdateBill from './pages/user/UserUpdateBill/UserUpdateBill';
import UserUpdateAction from './pages/user/UserUpdateAction/UserUpdateAction';
import UserListStartAddress from './pages/user/UserListStartAddress/UserListStartAddress';
import UserStatisticBill from './pages/user/UserStatisticBill/UserStatisticBill';
import MissingPage from './pages/guest/MissingPage/MissingPage';
import UserHome2 from './pages/user/UserHome2/UserHome2';
import Admin from './pages/admin/Admin/Admin';
import AdminHome from './pages/admin/AdminHome/AdminHome';
import AdminAddUser from './pages/admin/AdminAddUser/AdminAddUser';

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
        <Route path='/login-employee' element={<LoginEmployee />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<MissingPage />} />
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
          <Route path='home' element={<UserHome2 />} />
          <Route path='service' element={<UserService />} />
          <Route path='create-new-order' element={<UserAddOrder />} />
          <Route path='view-bills' element={<UserViewBills />} />
          <Route path='account' element={<UserAccount />} />
          <Route path='update-bill' element={<UserUpdateBill />} />
          <Route path='action-update-bill' element={<UserUpdateAction />} />
          <Route path='view-start-address' element={<UserListStartAddress />} />
          <Route path='view-end-address' element={<UserListStartAddress />} />
          <Route path='statistic-bill' element={<UserStatisticBill />} />
        </Route>
        <Route
          path='/manager'
          element={
            <Suspense fallback={<></>}>
              <RolesAuthRoute roles={['1']}>
                <Manager />
              </RolesAuthRoute>
            </Suspense>
          }
        >
          <Route path='home' element={<ManagerHome />} />
        </Route>
        <Route
          path='/admin'
          element={
            <Suspense fallback={<></>}>
              <RolesAuthRoute roles={['2']}>
                <Admin />
              </RolesAuthRoute>
            </Suspense>
          }
        >
          <Route path='home' element={<AdminHome />} />
          <Route path='create-new-employee' element={<AdminAddUser />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
