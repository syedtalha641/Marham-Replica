import { useState, useCallback } from 'react';
import '../assets/admin-login.css'

import { useNavigate } from "react-router-dom";
import {
    LoginSocialGoogle,
    LoginSocialFacebook
  } from 'reactjs-social-login'
  import {
    FacebookLoginButton,
    GoogleLoginButton} from 'react-social-login-buttons'
import { loginUser, saveSSOUser } from '../api/userApi';
const AdminLogin = () => {
    const [ loginData, setLoginData] = useState({});
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setLoginData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
          }));
    }
    const onResolveGoogle = async (data) => {
        let res = await saveSSOUser({
            firstName: data.given_name,
            lastName: data.family_name,
            email: data.email,
            provider: 'google',
            isAdmin: true
        });
        if(res) {
            navigate("/home");
        }
    }
    const onLoginClick = (e) => {
        e.preventDefault();
        loginUser(loginData)
    }
    return (
        <div id="app">
            <section className="section">
                <div className="d-flex flex-wrap align-items-stretch">
                    <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
                        <div className="p-4 m-3 flex flex-col items-center">
                            <img
                                src="./logo.png"
                                alt="logo"
                                width={180}
                                className="mb-4 mt-2"
                            />
                            <form
                                class="w-full flex flex-col"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="9JDmcqYkYSyRirWFnYE0J7hK2wN7vaR2U3xSQlaU"
                                />
                                <label class="font-sans	text-xl antialiased font-semibold text-blue-600 self-center	mb-8">Signin</label>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={onInputChange}
                                        id="email"
                                        type="email"
                                        className="form-control "
                                        name="email"
                                        tabIndex={1}
                                        required=""
                                        autoFocus=""
                                    />
                                </div>
                                <div className="form-group">
                                    
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                    <input
                                        onChange={onInputChange}
                                        id="password"
                                        type="password"
                                        className="form-control "
                                        name="password"
                                        tabIndex={2}
                                        required=""
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <a
                                        href="#admin_forgot_password"
                                        className="float-left mt-3"
                                    >
                                        Forgot Password?
                                    </a>
                                    <button
                                        className="btn btn-primary btn-lg btn-icon icon-right w-10/12"
                                        tabIndex={4}
                                        onClick={onLoginClick}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
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
                            client_id={ '873401437276-4p6bgid28l6kfjhdncuc7j8i10iqvi0a.apps.googleusercontent.com'}
                          
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
                    <div
                        className="col-lg-8 col-12 order-lg-2 order-2 min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
                        data-background="./admin-login.png"
                        style={{
                            backgroundImage:
                                'url("./admin-login.png")'
                        }}
                    >
                        <div className="absolute-bottom-left index-2">
                            <div className="text-light p-5 pb-2">
                                <div className="mb-5 pb-3">
                                    <h1 className="mb-2 display-4 font-weight-bold">Welcome22</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};
export default AdminLogin;