import '../assets/admin-login.css'

import { useNavigate } from "react-router-dom";

const AdminLogin = props => {
    const navigate = useNavigate();
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
                                method="POST"
                                action="#admin/verify_admin"
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
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-icon icon-right w-10/12"
                                        tabIndex={4}
                                        onClick={e=>navigate("/home")}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
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
                                    <h1 className="mb-2 display-4 font-weight-bold">Welcome</h1>
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