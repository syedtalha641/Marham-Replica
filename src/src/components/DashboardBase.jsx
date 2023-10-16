
// import '../assets/jquery.nicescroll.min'
// import 'jquery.nicescroll'
// import 'jquery.fancybox'
import '../assets/admin_custom'
import '../assets/script'
// import '../assets/select2.min'
import '../assets/admin_custom'



// import '../assets/jquery.fancybox.min.css'
import '../assets/dashboard.css'
import '../assets/app.css'
import '../assets/admin_custom.css'
import '../assets/components.css'
import '../assets/select2.min.css'
// import '../assets/feathericon.min.css'
// import '../assets/popper.min'

// import '@popperjs/core'


// import 'chart.js'

import { useLocation,Link } from 'react-router-dom';


import {FaUser,FaHome,FaHospital, FaUserInjured, FaSignOutAlt, FaCog, FaNewspaper, FaFile, FaBars} from 'react-icons/fa'
import { userLogout } from '../api/userApi'

const DashboardBase = ({title,path,children}) => {
    const location = useLocation();
    const onClickLogout = (e) => {
        e.preventDefault()
        userLogout();
        navigate("/admin/login")
    }
    return (
        <div id="app">
            <div className="main-wrapper">
                <div
                    className="navbar-bg"
                    data-background="./navbar_header.jpg"
                    style={{
                        backgroundImage:
                            'url("./navbar_header.jpg")'
                    }}
                >
                    <span className="mask bg-gradient-dark opacity-7" />
                </div>
                <nav className="navbar navbar-expand-lg main-navbar">
                    <form className="form-inline mr-auto">
                        <ul className="navbar-nav mr-3">
                            <li>
                                <a
                                    // href="javascript:void(0)"
                                    data-toggle="sidebar"
                                    className="nav-link nav-link-lg"
                                >
                                    <i className="fas" ><FaBars/></i>
                                </a>
                            </li>
                        </ul>
                    </form>
                    <form
                        id="logout-form"
                        action="/logout"
                        method="POST"
                        className="d-none"
                    >
                        <input
                            type="hidden"
                            name="_token"
                            defaultValue="40c01Th8ChmzlR2fzFQuj2wgBOL5wkBguSAB5N5M"
                        />
                    </form>
                    <ul className="navbar-nav navbar-right align-items-center">
                        <div className="mt-5"></div>
                        <li className="dropdown">
                            <a
                                // href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                            >
                                <div className="d-sm-none d-lg-inline-block" />
                                <img
                                    className="rounded"
                                    src="./English.png"
                                    style={{ width: 40, height: 40 }}
                                />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a
                                    href="#"
                                    className="dropdown-item d-flex justify-content-between"
                                >
                                    <div className="dropdown-item-avatar">
                                        <img
                                            width="50px"
                                            height="30px"
                                            alt="image"
                                            src="./English.png"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>English</b>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item d-flex justify-content-between"
                                >
                                    <div className="dropdown-item-avatar">
                                        <img
                                            width="50px"
                                            height="30px"
                                            alt="image"
                                            src="./Arabic.png"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Arabic</b>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a
                                // href="javascript:void(0)"
                                data-bs-toggle="dropdown"
                                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                            >
                                <div className="d-sm-none d-lg-inline-block">Super Admin</div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a
                                    href="#/profile"
                                    className="dropdown-item has-icon"
                                >
                                    <i><FaUser/></i> Profile
                                </a>
                                <a
                                    href="#/setting"
                                    className="dropdown-item has-icon"
                                >
                                    <i><FaCog/></i> Settings
                                </a>
                                <div className="dropdown-divider" />
                                <Link
                                    onClick={onClickLogout}
                                    // onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                    className="dropdown-item has-icon text-danger"
                                >
                                    <i><FaSignOutAlt/></i> Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div
                    className="main-sidebar"
                    style={{ overflow: "hidden", outline: "none" }}
                    tabIndex={1}
                >
                    <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a href="#">
                                <img
                                    src="./logo_black.png"
                                    width={180}
                                    height={45}
                                    alt="Logo"
                                    style={{ objectFit: "contain" }}
                                />
                            </a>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                            <a 
                            // href="/home"
                            onClick={e=>navigate("/home")}
                            >
                                <img
                                    src="./63f6efb85dbc2.png"
                                    width={50}
                                    height={50}
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <ul className="sidebar-menu">
                            <li className={location.pathname.includes("home")?"active":""}>
                                <Link to="/home">
                                <i  className='fas'><FaHome size={30}/></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className={location.pathname.includes("hospital")?"active":""}>
                                <Link 
                                to="/hospital"
                                // onClick={e=>navigate("/hospital")}
                                >
                                    <i  className='fas'><FaHospital size={30}/></i>
                                    <span>hospital</span>
                                </Link>
                            </li>
                            {/* <li className={location.pathname.includes("doctor")?"active":""}>
                                <a 
                                href="/doctor"
                                onClick={e=>navigate("/doctor")}
                                >
                                    <i  className='fas'><FaUser size={30}/></i>
                                    <span>doctor</span>
                                </a>
                            </li>
                            <li className={location.pathname.includes("patient")|| location.pathname.includes("admin-users")?"active || ":" || "}>
                                <a 
                                href="javascript:void(0)" 
                                className="nav-link has-dropdown">
                                    <i className='fas'><FaUserInjured size={30}/></i>
                                    <span>Users</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className={location.pathname.includes("admin-users")?"active":""}>
                                        <a
                                            className="nav-link"
                                            href="/admin-users"
                                            onClick={e=>navigate("/admin-users")}
                                        >
                                            Admin users
                                        </a>
                                    </li>
                                    <li className={location.pathname.includes("patient")?"active":""}>
                                        <a
                                            className="nav-link"
                                            href="/patient"
                                            onClick={e=>navigate("/patient")}
                                        >
                                            Patient
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </aside>
                </div>
                <div className="main-content" style={{ minHeight: 632 }}>
                    <section className="section">
                        <div className="section-header">
                            <h1>{title||"N/A"}</h1>
                            <div className="section-header-breadcrumb">
                                <div className="breadcrumb-item active">
                                    <a href="/home">Dashboard</a>
                                </div>
                                <div className="breadcrumb-item">{path||"N/A"}</div>
                            </div>
                        </div>
                        {children}
                    </section>
                </div>
            </div>
        </div>

    )
}

export default DashboardBase;