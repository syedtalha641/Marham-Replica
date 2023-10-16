import { Link } from "react-router-dom";
import { FaUser, FaHome, FaHospital, FaUserInjured, FaSignOutAlt, FaCog, FaNewspaper, FaFile, FaBars } from 'react-icons/fa'
import { userLogout } from "../api/userApi";

const Navbar1 = ({ isSignedIn }) => {
    const onClickLogout = (e) => {
        e.preventDefault()
        userLogout();
        navigate("/patient-login")
    }
    const signedIn = isSignedIn || false;
    return (
        <nav className="border-gray-200 sm:px-4 py-2.5 rounded border-b border-slate">
            <div className="msm:mx-0 xsm:mx-0 xxsm:mx-0 xlg:mx-20 2xl:mx-20">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <a
                        href="#/"
                        className="flex items-center ml-2"
                    >
                        <img
                            src="./logo.png"
                            className="h-16 w-16 mr-3 sm:h-12"
                            alt="Doctro Logo"
                        />
                    </a>
                    <div className="flex items-center md:order-2">
                        {/*<button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer">*/}
                        {/*    <img src="#/images/upload/English.png" className="w-5 h-5 mr-2 rounded-full" alt="">*/}
                        {/*    English*/}
                        {/*</button>*/}
                        <div
                            className="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-white"
                            id="language-dropdown-menu"
                        >
                            <ul className="py-2" role="none">
                                <li>
                                    <a
                                        href="#/select_language/1"
                                        className="block px-4 py-2 text-sm text-black-700"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">
                                            <img
                                                alt="Image placeholder"
                                                src=".//English.png"
                                                className="h-3.5 w-3.5 rounded-full mr-2"
                                            />
                                            English
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#/select_language/2"
                                        className="block px-4 py-2 text-sm text-black-700"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">
                                            <img
                                                alt="Image placeholder"
                                                src="./Arabic.png"
                                                className="h-3.5 w-3.5 rounded-full mr-2"
                                            />
                                            Arabic
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="flex items-center relative">*/}
                        {/*    <div className="my-auto cart">*/}
                        {/*        <a className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 flex relative" href="#/view-cart">*/}
                        {/*            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                <path d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18C4 17.45 4.196 16.979 4.588 16.587C4.97933 16.1957 5.45 16 6 16C6.55 16 7.02067 16.1957 7.412 16.587C7.804 16.979 8 17.45 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02067 19.8043 6.55 20 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.196 19.021 14 18.55 14 18C14 17.45 14.196 16.979 14.588 16.587C14.9793 16.1957 15.45 16 16 16C16.55 16 17.021 16.1957 17.413 16.587C17.8043 16.979 18 17.45 18 18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20ZM4.2 2H18.95C19.3333 2 19.625 2.17067 19.825 2.512C20.025 2.854 20.0333 3.2 19.85 3.55L16.3 9.95C16.1167 10.2833 15.8707 10.5417 15.562 10.725C15.254 10.9083 14.9167 11 14.55 11H7.1L6 13H18V15H6C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.354 3.9 12.7 4.25 12.05L5.6 9.6L2 2H0V0H3.25L4.2 2Z" fill="#000" />*/}
                        {/*            </svg>*/}
                        {/*            <p className="absolute flex items-center justify-center tot_cart">0</p>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}



                        {!signedIn && <div className="mt-auto mb-auto ml-3 xxsm:ml-0">
                            <Link
                                to="/landing"
                                data-te-ripple-init=""
                                data-te-ripple-color="light"
                                className="rounded-none bg-primary tracking-wide px-4 py-2 text-white font-fira-sans font-normal text-sm"
                            >
                                Sign In
                            </Link>
                        </div>}



                        {signedIn && <>
                            {/* <div className="dropdown">
                            <button
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                data-dropdown-toggle="dropdownAvatarName"
                                className="dropdown-toggle flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 dark:text-white"
                                type="button"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 mr-2 rounded-full"
                                    src="./defaultUser.png"
                                    alt="user photo"
                                />
                                test
                                <svg
                                    className="w-4 h-4 mx-1.5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div
                                id="dropdownAvatarName"
                                className="bg-white z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44  dark:divide-gray-600"
                                style={{
                                    position: "absolute",
                                    inset: "0px auto auto 0px",
                                    margin: 0,
                                    transform: "translate3d(1326.4px, 54.4px, 0px)"
                                }}
                                data-popper-placement="bottom"
                            >
                                <ul
                                    aria-labelledby="dropdownMenuButton1"
                                    // className="dropdown-menu"
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200 dropdown-menu"
                                    // aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                                >
                                    <li>
                                        <a
                                            href="https://health.mgyourstorymatters.com/profile-setting"
                                            className="block px-4 py-2"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <a
                                        href="javascript:void(0)"
                                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                        className="block px-4 py-2 text-sm "
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                            </div> */}

                            <div className="dropdown">
                                <a
                                    // href="javascript:void(0)"
                                    data-bs-toggle="dropdown"
                                    className="d-flex justify-content-center items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 dark:text-white"
                                >
                                    <div className="btn d-lg-inline-block">
                                        <img
                                            className="w-8 h-8 mr-2 rounded-full"
                                            src="./defaultUser.png"
                                            alt="user photo"
                                        />
                                        Test
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link
                                        to="/profile-setting"
                                        className="dropdown-item has-icon"
                                    >
                                        <i><FaUser /></i> Dashboard
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <Link
                                        onClick={onClickLogout}
                                        // onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                        className="dropdown-item has-icon text-danger"
                                    >
                                        <i><FaSignOutAlt /></i> Logout3
                                    </Link>
                                </div>
                            </div>


                        </>}








                    </div>
                    <button
                        data-collapse-toggle="mobile-menu-language-select"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden xxsm:block hover:bg-gray-100"
                        aria-controls="mobile-menu-language-select"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {/*<div className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">*/}
                {/*    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">*/}
                {/*        <li>*/}
                {/*            <a href="#/show-doctors" className="text-black font-fira-sans block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" aria-current="page">Find Doctors</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#/all-pharmacies" className="text-black block py-2 font-fira-sans pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pharmacy</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#/all-labs" className="text-black block py-2 font-fira-sans pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Lab Tests</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#/our-offers" className="text-black block py-2 font-fira-sans pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Offers</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#/our_blogs" className="text-black block py-2 font-fira-sans pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}

export default Navbar1;