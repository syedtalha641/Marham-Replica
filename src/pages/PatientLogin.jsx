
import Navbar1 from '../components/Navbar1'

import { useNavigate,Link } from 'react-router-dom';

const PatientLogin = props => {

  const navigate = useNavigate();
  
  return (
    <>
      <Navbar1 isSignedIn={false}/>
      <div className="main_content overflow-hidden">
        <div className="xl:w-3/4 mx-auto">
          <div className="flex justify-between items-center pt-20 pb-20 gap-10 lg:flex-row xxsm:flex-col xxsm:mx-5 xl:mx-0 2xl:mx-0">
            <div className="bg-slate-100 justify-center items-center p-10 2xl:w-2/4 xxsm:w-full">
              <h1 className="font-fira-sans leading-10 font-medium text-3xl mb-10">
                Talk to thousands of specialist doctors.
              </h1>
              <div>
                <img
                  src="./login.png"
                  className="w-full h-3/5"
                  alt=""
                />
              </div>
            </div>
            <div className="2xl:w-2/4 xxsm:w-full">
              <h1 className="font-fira-sans leading-10 font-normal text-3xl">
                Welcome Back,
              </h1>
              <h1 className="font-fira-sans leading-10 font-medium text-3xl">
                Login to get started!
              </h1>
              <form
                action="#patient-login"
                method="post"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="9JDmcqYkYSyRirWFnYE0J7hK2wN7vaR2U3xSQlaU"
                />
                <div className="pt-5">
                  <label
                    htmlFor="email"
                    className="font-fira-sans text-black text-sm font-normal"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                    placeholder="Enter email"
                  />
                </div>
                <div className="pt-3">
                  <label
                    htmlFor="email"
                    className="font-fira-sans text-black text-sm font-normal"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                    placeholder="Enter password"
                  />
                </div>
                <div className="pt-10">
                  <button
                    type="submit"
                    onClick={e=>navigate('/landing')}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Login
                  </button>
                  <div className="pt-3">
                    <span style={{ width: "50%", display: "inline-block" }}>
                      <Link
                        to="/landing"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          background: "#0866FF"
                        }}
                        className="font-fira-sans text-white w-full text-sm font-normal py-3"
                      >
                        <svg
                          className="pr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome  - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                svg {\n                                                    fill: #ffffff\n                                                }\n                                            "
                            }}
                          />
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                        Continue with Facebook
                      </Link>
                    </span>
                    <span style={{ width: "49%", display: "inline-block" }}>
                      <Link
                        to="/landing"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          background: "#EA4335"
                        }}
                        className="font-fira-sans text-white w-full text-sm font-normal py-3"
                      >
                        <svg
                          className="pr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 488 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome  - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                svg {\n                                                    fill: #ffffff\n                                                }\n                                            "
                            }}
                          />
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  {/*<div className="font-fira-sans font-medium text-sm leading-5 text-primary text-normal">*/}
                  {/*    <a href="#doctor/doctor_login">Doctor Login</a>*/}
                  {/*</div>*/}
                  <div className="font-fira-sans font-medium text-sm leading-5">
                    Don’t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-primary text-normal"
                    >
                      Signup
                    </Link>
                  </div>
                  <div className="font-fira-sans font-medium text-sm leading-5 text-primary text-normal">
                    <a href="#forgot_password">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default PatientLogin