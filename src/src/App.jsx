import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes/Routes';
import { validateToken } from './service/authService';
import { JWT_LOCAL_STORAGE } from './utils/contant';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  let location = useLocation();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const { user, token } = useSelector((state) => state.user);

  // const handleViewSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // };

  useEffect(() => {
    async function checkAuthentication() {
      console.log(location);
      const token = localStorage.getItem(JWT_LOCAL_STORAGE); // Retrieve the token
      if (token) {
        await validateToken(token);
      } else {
        if(!location.pathname.includes("login")) {
          navigate("/login")
        }
      }
      setLoading(false);
    }

    checkAuthentication();
  }, [])

  useEffect(() => {
    if(!loading && (!token || !user)) {
      navigate("/login")
    }
    if(token && user) {
      setLoading(false);
      navigate("/home")
    }
  }, [token, user])

  return (
    <AppRoutes/>
  )
}

export default App
