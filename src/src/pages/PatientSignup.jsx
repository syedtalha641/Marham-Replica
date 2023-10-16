
import Navbar1 from '../components/Navbar1'

import { useNavigate,Link } from 'react-router-dom';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useState } from 'react';
import { signupUser, saveSSOUser } from '../api/userApi';
import {
  LoginSocialGoogle,
  LoginSocialFacebook
} from 'reactjs-social-login'
import {
  FacebookLoginButton,
  GoogleLoginButton} from 'react-social-login-buttons'

const PatientSignup = props => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
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
  const setInputValue = (e) => {
    setData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSignupClick = async (e) => {
    e.preventDefault();
    let res = await signupUser(data);
    if(res) {
      navigate("/login");
    }
  }
  return (
    <>
      <Navbar1 isSignedIn={false}/>
      <div className="main_content overflow-hidden">
  <div className="xl:w-3/4 mx-auto">
    <div className="flex justify-between pt-20 pb-20 gap-10 lg:flex-row xxsm:flex-col xxsm:mx-5 xl:mx-0 2xl:mx-0">
      <div className="bg-slate-100 2xl:w-2/4 xxsm:w-full">
        <h1 className="font-fira-sans leading-10 font-medium text-3xl px-5 p-5 ml-5">
          Find the best doctor and medicine for you.
        </h1>
        <div className="">
          <img
            src="./doctor-nurses.png"
            className="mt-20"
            alt=""
          />
        </div>
      </div>
      <div className="2xl:w-2/4 xxsm:w-full">
        <h1 className="font-fira-sans leading-10 font-normal text-3xl">
          Welcome,
        </h1>
        <h1 className="font-fira-sans leading-10 font-medium text-3xl">
          Create New Account!
        </h1>
        <div className="pt-5 flex">
          {/*<div data-attr="doctor" class="signupDiv w-1/3 cursor-pointer py-1 ml-2 border border-[#D8D8D8] ">*/}
          {/*    <input  id="bordered-radio-1" type="radio" value="doctor" name="signup_title" class="border-[#D8D8D8] cursor-pointer signup_title ml-2 text-blue-600">*/}
          {/*    <label for="bordered-radio-1" class="text-sm font-medium text-[#666666]">Doctor</label>*/}
          {/*</div>*/}
          {/*<div data-attr="patient" class="signupDiv w-1/3 cursor-pointer py-1 ml-2 border border-[#D8D8D8] active">*/}
          {/*    <input checked id="bordered-radio-2" type="radio" value="patient" name="signup_title" class="border-[#D8D8D8] cursor-pointer signup_title ml-2 text-blue-600">*/}
          {/*    <label for="bordered-radio-2" class="text-sm font-medium text-[#666666]">Patient</label>*/}
          {/*</div>*/}
        </div>
        <div className="tab-content contentDisplay" id="tabs-tabContent">
          <div className="hide doctorDiv">
            <form
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="MAXanfZlMkDQZ7dON2WrbtXhDQjxxJjk9vhaq1X0"
              />
              <input type="hidden" name="from" defaultValue="doctor" />
              <div className="pt-3">
                <label className="font-fira-sans text-black text-sm font-normal">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doc_name"
                  defaultValue=""
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter doctor name"
                />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="email"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="doc_email"
                  defaultValue=""
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter email"
                />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="phone"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Phone Number2
                </label>
                  ToDo
                <input type="hidden" name="phone_code" defaultValue={+92} />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="password"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  name="doc_password"
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter password"
                />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="doc_dob"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Birth Date
                </label>
                <div
                  className="relative mb-3"
                  data-te-datepicker-init=""
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="date"
                    name="doc_dob"
                    defaultValue=""
                    className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                    data-te-datepicker-toggle-ref=""
                    data-te-datepicker-toggle-button-ref=""
                  />
                </div>
              </div>
              <div className="pt-3">
                <div className="flex items-center mb-5">
                  <label
                    htmlFor="email"
                    className="font-fira-sans text-black text-sm font-normal"
                  >
                    Gender
                  </label>
                  <div className="ml-10 flex gap-10">
                    <div className="form-check form-check-inline">
                      <input
                        defaultChecked=""
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="doc_gender"
                        id="doc_gender_male"
                        defaultValue="male"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800  cursor-pointer"
                        htmlFor="gender_male"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="doc_gender"
                        id="doc_gender_female"
                        defaultValue="female"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800  cursor-pointer"
                        htmlFor="gender_female"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <div className="pt-10">
                  <button
                    onClick={onSignupClick}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Signup
                  </button>
                  
                </div>
                
                <h1 className="font-fira-sans font-medium text-sm leading-5 pt-4 text-center">
                  Already have an account?
                  <a
                    href="https://health.mgyourstorymatters.com/patient-login"
                    className="text-primary text-normal"
                  >
                    Login
                  </a>
                </h1>
              </div>
            </form>
          </div>
          <div className="active patientDiv">
            <form
            >
              <input type="hidden" name="from" defaultValue="patient" />
              <input
                type="hidden"
                name="_token"
                defaultValue="MAXanfZlMkDQZ7dON2WrbtXhDQjxxJjk9vhaq1X0"
              />
              <div className="pt-3">
                <label className="font-fira-sans text-black text-sm font-normal">
                  Patient Name
                </label>
                <input
                  onChange={(e) => setInputValue(e)}
                  type="text"
                  name="firstName"
                  defaultValue=""
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter patient first name"
                />
                <input
                  onChange={(e) => setInputValue(e)}
                  style={{ marginTop: "3px"}}
                  type="text"
                  name="lastName"
                  defaultValue=""
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter patient last name"
                />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="email"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setInputValue(e)}
                  type="text"
                  name="email"
                  defaultValue=""
                  className="  w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter email"
                />
              </div>
              {/* <div className="pt-3">
                <label
                  htmlFor="phone"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Phone Number
                </label>
                <IntlTelInput
                  onSelectFlag={e => console.log(e)}
                  containerClassName="intl-tel-input iti w-full"
                  inputClassName="form-control w-full py-1.5 text-base font-normal text-gray  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray focus:outline-none  border-gray-300 rounded text-base font-normal text-gray"
                />
                <input type="hidden" name="phone_code" defaultValue={+92} />
              </div> */}
              <div className="pt-3">
                <label
                  htmlFor="password"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Create Password
                </label>
                <input
                  onChange={(e) => setInputValue(e)}
                  type="password"
                  name="password"
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter password"
                />
              </div>
              {/* <div className="pt-3">
                <label
                  htmlFor="dob"
                  className="font-fira-sans text-black text-sm font-normal"
                >
                  Birth Date
                </label>
                <div
                  className="relative mb-3"
                  data-te-datepicker-init=""
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="date"
                    name="dob"
                    defaultValue=""
                    className=" w-full text-sm font-fira-sans text-gray block p-2 z-20"
                    data-te-datepicker-toggle-ref=""
                    data-te-datepicker-toggle-button-ref=""
                  />
                </div>
              </div> */}
              <div className="pt-3">
                <div className="flex items-center mb-5">
                  <label
                    htmlFor="email"
                    className="font-fira-sans text-black text-sm font-normal"
                  >
                    Gender
                  </label>
                  <div className="ml-10 flex gap-10">
                    <div className="form-check form-check-inline">
                      <input
                        onChange={(e) => setInputValue(e)}
                        defaultChecked=""
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="gender"
                        id="gender_male"
                        defaultValue="male"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800  cursor-pointer"
                        htmlFor="gender_male"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        onChange={(e) => setInputValue(e)}
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="gender"
                        id="gender_female"
                        defaultValue="female"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800  cursor-pointer"
                        htmlFor="gender_female"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <div className="pt-10">
                  <button
                    onClick={onSignupClick}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Signup
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
                <h1 className="font-fira-sans font-medium text-sm leading-5 pt-4 text-center">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-primary text-normal"
                  >
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>

  )
}

export default PatientSignup