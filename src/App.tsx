// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from 'src/routes/PublicRoute';
import Login from 'pages/Login';
import PrivateRoute from 'src/routes/PrivateRoute';
import AdminRoute from 'src/routes/AdminRoute';
import PetugasRoute from 'src/routes/PetugasRoute';
import Petugas from 'pages/Petugas';
import 'src/scss/style.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import DashboardLayout from 'src/layout/DashboardLayout';
import Provinsi from 'src/pages/Provinsi';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<PublicRoute />} >
      <Route path="/login" element={<Login />} />
    </Route>
    <Route path='/' element={<PrivateRoute/>}>
      <Route path='/' element={<AdminRoute/>}>
          <Route path='/dashboard' element={<DashboardLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path="provinsi" element={<Provinsi/>} />
          </Route>
      </Route>
      <Route path='/tps' element={<PetugasRoute/>}>
        <Route path='/tps' element={<Petugas/>} />
      </Route>
    </Route>
</>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
