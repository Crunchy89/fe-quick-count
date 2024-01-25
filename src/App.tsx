import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from 'src/routes/PublicRoute';
import Login from 'pages/Login';
import PrivateRoute from 'src/routes/PrivateRoute';
import AdminRoute from 'src/routes/AdminRoute';
import PetugasRoute from 'src/routes/PetugasRoute';
import Dashboard from 'pages/Dashboard';
import Petugas from 'pages/Petugas';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />} >
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<AdminRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          <Route path='/tps' element={<PetugasRoute/>}>
            <Route path='/tps' element={<Petugas/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
