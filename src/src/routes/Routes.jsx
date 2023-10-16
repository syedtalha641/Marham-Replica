import AdminLogin from "../pages/AdminLogin"
import DashboardHome from "../pages/DashboardHome"
import PatientLogin from "../pages/PatientLogin"
import PatientSignup from "../pages/PatientSignup"
import DashboardHospital from "../pages/DashboardHospital"
import DashboardAddHospital from "../pages/DashboardAddHospital"
import PrivateRoute from "./PrivateRoute"
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={ <PrivateRoute />}>
                    <Route element={<DashboardHome/>} path="/home" />
                </Route>
                <Route path="/login" element={<PatientLogin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/signup" element={<PatientSignup />} />
                <Route path="/hospital" element={<DashboardHospital />} />
                <Route path="/hospital-create" element={<DashboardAddHospital />} />
            </Routes>
        </>
    )
}

export default AppRoutes;