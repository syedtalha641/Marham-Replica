
import Navbar1 from '../components/Navbar1'

import { useNavigate,Link } from 'react-router-dom';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const PatientSignup = props => {

  const navigate = useNavigate();
  
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
              action="https://health.mgyourstorymatters.com/doctorRegister"
              method="post"
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
                    type="submit"
                    onClick={e=>navigate('/landing')}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Signup
                  </button>
                  <div className="pt-3">
                    <span style={{ width: "50%", display: "inline-block" }}>
                      <Link
                        href="/landing"
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
                                "\n                                                            svg {\n                                                                fill: #ffffff\n                                                            }\n                                                        "
                            }}
                          />
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                        Continue with Facebook
                      </Link>
                    </span>
                    <span style={{ width: "49%", display: "inline-block" }}>
                      <Link
                        href="/landing"
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
                                "\n                                                            svg {\n                                                                fill: #ffffff\n                                                            }\n                                                        "
                            }}
                          />
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                      </Link>
                    </span>
                  </div>
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
              action="https://health.mgyourstorymatters.com/signUp"
              method="post"
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
                  type="text"
                  name="name"
                  defaultValue=""
                  className=" w-full text-sm font-fira-sans text-gray block p-2 z-20 border border-white-light"
                  placeholder="Enter patient name"
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
                    type="submit"
                    onClick={e=>navigate('/landing')}
                    className="font-fira-sans text-white bg-primary w-full text-sm font-normal py-3"
                  >
                    Signup
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
                                "\n                                                            svg {\n                                                                fill: #ffffff\n                                                            }\n                                                        "
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
                                "\n                                                            svg {\n                                                                fill: #ffffff\n                                                            }\n                                                        "
                            }}
                          />
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                      </Link>
                    </span>
                  </div>
                </div>
                <h1 className="font-fira-sans font-medium text-sm leading-5 pt-4 text-center">
                  Already have an account?
                  <Link
                    to="/patient-login"
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