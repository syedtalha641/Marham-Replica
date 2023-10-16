
import { useState } from 'react';
import { loginUser, saveSSOUser } from '../api/userApi';
import Navbar1 from '../components/Navbar1'
import { useNavigate, Link } from 'react-router-dom';
import {
  LoginSocialGoogle,
  LoginSocialFacebook
} from 'reactjs-social-login'
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons'

const PatientLogin = props => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setLoginData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    loginUser(loginData)
  }

  const onResolveGoogle = async (data) => {
    let res = await saveSSOUser({
      firstName: data.given_name,
      lastName: data.family_name,
      email: data.email,
      provider: 'google',
      isAdmin: false
    });
    if (res) {
      navigate("/home");
    }
  }

  return (
    <>
      <Navbar1 isSignedIn={false} />
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
                    type="password"
                    name="password"
                    className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                    placeholder="Enter password"
                  />
                </div>
                <div className="pt-10">
                  <button
                    onClick={onLoginClick}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Login
                  </button>

                </div>
                <div>
                    <LoginSocialFacebook
                      isOnlyGetToken
                      appId={'1016237126280365'}
                      onResolve={({ provider, data }) => {
                        
                      }}
                      onReject={(err) => {
                        console.log(err)
                      }}
                    >
                      <FacebookLoginButton />
                    </LoginSocialFacebook>
                    <LoginSocialGoogle
                      scope='profile'
                      client_id={'873401437276-4p6bgid28l6kfjhdncuc7j8i10iqvi0a.apps.googleusercontent.com'}

                      onResolve={({ provider, data }) => {
                        onResolveGoogle(data)
                      }}
                      onReject={(err) => {
                        console.log(err)
                      }}
                    >
                      <GoogleLoginButton />
                    </LoginSocialGoogle>
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