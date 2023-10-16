import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css'
// import './assets/jquery.min'
// import 'jquery'
// import './assets/bootstrap.min.css';
// import './assets/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/style.css'

import AdminLogin from './pages/AdminLogin.jsx';
import PatientLogin from './pages/PatientLogin.jsx'
import Landing from './pages/Landing.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import DashboardAdmins from './pages/DashboardAdmins.jsx'
import DashboardHospital from './pages/DashboardHospital.jsx';
import DashboardAddHospital from './pages/DashboardAddHospital.jsx';
import DashboardDoctor from './pages/DashboardDoctor.jsx';
import DashboardPatient from './pages/DashboardPatient.jsx';
import PatientProfile from './pages/PatientProfile.jsx';
import PatientChangePwd from './pages/PatientChangePwd.jsx';
import { Provider } from 'react-redux'


import {
  createBrowserRouter,
  createHashRouter,
  Link,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Table from './components/Tabel.jsx'
import PatientSignup from './pages/PatientSignup.jsx'
import store from './store/index.js'
import { ThemeProvider } from 'styled-components'

const NotFound = props =>{
  return (
      <>
      <h1>404 Not Found</h1>
      <h1>Available Routes Are:</h1>
      {router.routes.map((r,i)=>(
        <>
        <Link key={i} to={r.path}>{r.path}</Link>
        <br/>
        </>
      ))}
      </>
  )
}

const router = createHashRouter([
  {
    path: "/login",
    element: <AdminLogin/>,
  },
  {
    path: "/patient-login",
    element: <PatientLogin/>,
  },
  {
    path: "/profile-setting",
    element: <PatientProfile/>,
  },
  {
    path: "/change-password",
    element: <PatientChangePwd/>,
  },
  {
    path: "/landing",
    element: <Landing/>,
  },
  {
    path: "/home",
    element: <DashboardHome/>,
  },
  {
    path: "/hospital",
    element: <DashboardHospital/>,
  },
  {
    path: "/hospital-create",
    element: <DashboardAddHospital/>,
  },
  {
    path: "/doctor",
    element: <DashboardDoctor/>,
  },
  {
    path: "/patient",
    element: <DashboardPatient/>,
  },
  {
    path: "/signup",
    element: <PatientSignup/>,
  },
  {
    path: "/admin-users",
    element: <DashboardAdmins/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

const theme = {
  main: "mediumseagreen"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
    {/* <App /> */}
    {/* <AdminLogin/> */}
    {/* <PatientLogin/> */}
    {/* <Landing/> */}
    {/* <DashboardHome/> */}
    {/* <DashboardHospital/> */}
  </React.StrictMode>,
)
