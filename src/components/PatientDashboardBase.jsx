
import Navbar1 from './Navbar1'



import { useLocation } from 'react-router-dom';
import { useNavigate,Link } from "react-router-dom";

const PatientDashboardBase = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();

  return (
    <>
      <Navbar1 isSignedIn={true} />
      <div className="main_content overflow-hidden">
        <div className="xl:w-3/4 mx-auto">
          <div className="xxsm:mx-5 xl:mx-0 2xl:mx-0 pt-10">
            <div className="flex h-full mb-20 xxsm:flex-col sm:flex-col xmd:flex-row xmd:space-x-5">
              <div className="2xl:w-1/5 1xl:w-1/5 xl:w-1/4 xlg:w-80 lg:w-72 xxmd:w-72 !xmd:w-72 md:w-72 h-auto">
                <div className="w-full shadow-xl rounded-lg px-2 pt-5">
                  <div className="text-center pb-5">
                    <img
                      src="./defaultUser.png"
                      className="2xl:w-28 2xl:h-28 xlg:h-24 xlg:w-24 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-20 sm:w-20 xsm:h-20
  xsm:w-20 msm:h-20 msm:w-20 xxsm:h-20 xxsm:w-20 border border-primary rounded-full p-0.5 m-auto"
                      alt=""
                    />
                    <div className="mt-3 text-2xl font-fira-sans">test</div>
                  </div>
                  <ul className="sidebar relative text-left">
                    <li
                      className={"relative text-left p-2.5 "+(location.pathname.includes("profile-setting")?"active":"")}
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                    >
                      <Link
                        to="/profile-setting"
                        className="text-black-600 text-base items-center  font-fira-sans overflow-hidden rounded flex"
                      >
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.09461 14.8903C4.97758 14.5577 3.98328 13.9403 3.19597 13.1222C3.48968 12.7741 3.66668 12.3243 3.66668 11.8332C3.66668 10.7286 2.77125 9.83321 1.66668 9.83321C1.59986 9.83321 1.53381 9.83648 1.46867 9.84288C1.37994 9.40908 1.33334 8.95991 1.33334 8.49988C1.33334 7.80301 1.44027 7.13111 1.63861 6.49968C1.64795 6.49981 1.6573 6.49988 1.66668 6.49988C2.77125 6.49988 3.66668 5.60445 3.66668 4.49988C3.66668 4.18278 3.59288 3.88291 3.46154 3.61654C4.23251 2.89967 5.17351 2.36318 6.21738 2.07422C6.54814 2.72257 7.22224 3.16655 8.00001 3.16655C8.77778 3.16655 9.45188 2.72257 9.78264 2.07422C10.8265 2.36318 11.7675 2.89967 12.5385 3.61654C12.4071 3.88291 12.3333 4.18278 12.3333 4.49988C12.3333 5.60445 13.2288 6.49988 14.3333 6.49988C14.3427 6.49988 14.3521 6.49981 14.3614 6.49968C14.5597 7.13111 14.6667 7.80301 14.6667 8.49988C14.6667 8.95991 14.6201 9.40908 14.5313 9.84288C14.4662 9.83648 14.4002 9.83321 14.3333 9.83321C13.2288 9.83321 12.3333 10.7286 12.3333 11.8332C12.3333 12.3243 12.5103 12.7741 12.804 13.1222C12.0167 13.9403 11.0224 14.5577 9.90541 14.8903C9.64761 14.0838 8.89201 13.4999 8.00001 13.4999C7.10801 13.4999 6.35241 14.0838 6.09461 14.8903Z"></path>
                          <path
                            d="M7.99999 10.8327C9.28866 10.8327 10.3333 9.78802 10.3333 8.49935C10.3333 7.21068 9.28866 6.16602 7.99999 6.16602C6.71132 6.16602 5.66666 7.21068 5.66666 8.49935C5.66666 9.78802 6.71132 10.8327 7.99999 10.8327Z"
                            fill="#020613"
                            stroke="white"
                            strokeWidth="66.6667"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="ml-2">Profile Settings</span>
                      </Link>
                    </li>
                    <li
                      className={"relative text-left p-2.5 "+(location.pathname.includes("change-password")?"active":"")}
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                    >
                      <Link
                        to="/change-password"
                        // onClick={e=>navigate("/change-password")}
                        className="text-black-600 text-base items-center  font-fira-sans overflow-hidden rounded flex"
                      >
                        <svg
                          width={12}
                          height={15}
                          viewBox="0 0 12 15"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.99999 4.83398H9.33332V4.16732C9.33332 3.28326 8.98213 2.43542 8.35701 1.8103C7.73189 1.18517 6.88404 0.833984 5.99999 0.833984C5.11593 0.833984 4.26809 1.18517 3.64297 1.8103C3.01785 2.43542 2.66666 3.28326 2.66666 4.16732V4.83398H1.99999C1.64637 4.83398 1.30723 4.97446 1.05718 5.22451C0.807132 5.47456 0.666656 5.8137 0.666656 6.16732V12.834C0.666656 13.1876 0.807132 13.5267 1.05718 13.7768C1.30723 14.0268 1.64637 14.1673 1.99999 14.1673H9.99999C10.3536 14.1673 10.6927 14.0268 10.9428 13.7768C11.1928 13.5267 11.3333 13.1876 11.3333 12.834V6.16732C11.3333 5.8137 11.1928 5.47456 10.9428 5.22451C10.6927 4.97446 10.3536 4.83398 9.99999 4.83398V4.83398ZM3.99999 4.16732C3.99999 3.63688 4.2107 3.12818 4.58578 2.7531C4.96085 2.37803 5.46956 2.16732 5.99999 2.16732C6.53042 2.16732 7.03913 2.37803 7.4142 2.7531C7.78928 3.12818 7.99999 3.63688 7.99999 4.16732V4.83398H3.99999V4.16732Z"></path>
                          <path
                            d="M6 7.5C5.61746 7.50045 5.24671 7.63249 4.94999 7.87395C4.65327 8.1154 4.44865 8.45159 4.37047 8.82606C4.29229 9.20054 4.34532 9.59051 4.52064 9.93051C4.69597 10.2705 4.98292 10.5399 5.33334 10.6933V11.5C5.33334 11.6768 5.40358 11.8464 5.5286 11.9714C5.65362 12.0964 5.82319 12.1667 6 12.1667C6.17682 12.1667 6.34638 12.0964 6.47141 11.9714C6.59643 11.8464 6.66667 11.6768 6.66667 11.5V10.6933C7.01709 10.5399 7.30404 10.2705 7.47936 9.93051C7.65469 9.59051 7.70771 9.20054 7.62954 8.82606C7.55136 8.45159 7.34674 8.1154 7.05002 7.87395C6.7533 7.63249 6.38255 7.50045 6 7.5V7.5Z"
                            fill="#020613"
                          />
                        </svg>
                        <span className="ml-2">Change Password</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
             {children}
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default PatientDashboardBase