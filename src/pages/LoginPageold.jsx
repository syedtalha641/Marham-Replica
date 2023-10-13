import { FaBars } from 'react-icons/fa'

const LoginPage = props => {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="form-group w-100 h-100 m-auto d-flex justify-content-center">
                    <form action="" className='w-100 px-5' >
                        <img src="https://www.pngitem.com/pimgs/m/195-1951323_your-logo-here-png-company-logo-your-logo.png" alt="logo" height={60} />
                        <div className="form-group py-4">
                            <label>Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group  py-4">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className='d-flex justify-content-between'>
                            <a href="#" className='link-offset-2 link-underline link-underline-opacity-0'>Forget Passsword?</a>
                            <button className="btn btn-sm btn-primary px-4 py-2 align-rights" type="submit">Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="col-md-8 bg-img-login fullscreen">
                <h1 className='welcome-title'>Welcome</h1>
            </div>
        </div>
    );
};
export default LoginPage;