

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import PatientDashboardBase from '../components/PatientDashboardBase';


const PatientProfile = props => {
  return (
    <>
      <PatientDashboardBase>
        <div className="w-full md:w-full xxmd:w-full xmd:w-80 lg:w-2/3 xlg:w-2/3 1xl:w-full 2xl:w-full sm:ml-0 xxsm:ml-0 shadow-lg overflow-hidden p-5 mt-10 2xl:mt-0 xmd:mt-0">
          <form
            action="https://health.mgyourstorymatters.com/update_user_profile"
            method="post"
            className="h-100"
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="sByW4wU2efWlIi3WBRfUJC5X8LdPARzao2Ny9aVo"
            />
            <div className="change-avtar">
              <div className="avatar-upload relative">
                <div className="avatar-edit absolute">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="d-none"
                    accept=".png, .jpg, .jpeg"
                  />
                  <label
                    htmlFor="image"
                    className=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Select new profile pic"
                  />
                </div>
                <div className="avatar-preview">
                  <div
                    id="imagePreview"
                    style={{
                      backgroundImage: "url(./defaultUser.png)"
                    }}
                  />
                </div>
                <div className="mt-2">
                  <p className="text-center patient-image">Patient Image</p>
                </div>
              </div>
            </div>
            <div className="flex xxsm:flex-col sm:flex-row justify-center w-full">
              <div className="mb-3 sm:w-1/2 xxsm:w-full">
                <label
                  htmlFor="name"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue="test"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray focus:outline-none"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3 sm:w-1/2 xxsm:w-full sm:ml-2 xxsm:ml-0">
                <label
                  htmlFor="email"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue="test@test.com"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray focus:outline-none"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex xxsm:flex-col sm:flex-row justify-center w-full">
              <div className="mb-3 sm:w-1/2 xxsm:w-full">
                <label
                  htmlFor="phoneNumber"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Phone number
                </label>
                <IntlTelInput
                  value='+1 9287654321'
                  onSelectFlag={e => console.log(e)}
                  containerClassName="intl-tel-input iti w-full"
                  inputClassName="form-control w-full py-1.5 text-base font-normal text-gray  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray focus:outline-none  border-gray-300 rounded text-base font-normal text-gray"
                />
              </div>
              <div className="mb-3 sm:w-1/2 xxsm:w-full sm:ml-2 xxsm:ml-0">
                <label
                  htmlFor="language"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Language
                </label>
                <div className="flex justify-center">
                  <div className="mb-3 w-full">
                    <select
                      name="language"
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray  bg-clip-padding bg-no-repeat border
                              border-solid border-gray-light rounded transition ease-in-out m-0 focus:text-gray focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option value="English">English</option>
                      <option value="Arabic">Arabic</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex xxsm:flex-col sm:flex-row justify-center w-full">
              <div className="mb-3 sm:w-1/2 xxsm:w-full">
                <label
                  htmlFor="dob"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Date of birth
                </label>
                <div
                  className="datepicker relative mb-3"
                  data-mdb-toggle-button="true"
                >
                  <input
                    name="dob"
                    type="text"
                    min="07/10/2023"
                    className=" font-fira-sans form-control block w-full px-3 py-1.5 text-base font-normal text-gray  bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray focus:outline-none active"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                    defaultValue="2000-01-01"
                  />
                </div>
              </div>
              <div className="mb-3 sm:w-1/2 xxsm:w-full sm:ml-2 xxsm:ml-0">
                <label
                  htmlFor="language"
                  className="form-label inline-block mb-2 text-gray"
                >
                  Gender
                </label>
                <div className="flex justify-center">
                  <div className="mb-3 w-full">
                    <select
                      name="gender"
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray  bg-clip-padding bg-no-repeat
                               border border-solid border-gray-light rounded transition ease-in-out m-0 focus:text-gray focus:outline-none
                               "
                      aria-label="Default select example"
                    >
                      <option selected="" value="male">
                        Male
                      </option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full xxsm:flex-col msm:flex-row">
              <div className="w-full mb-4">
                <a
                  className="px-6 py-3 border border-red text-white bg-red rounded-md font-medium text-xs leading-tight uppercase focus:outline-none
                      focus:ring-0 transition duration-150 ease-in-out"
                  href="javascript:void(0);"
                  onclick="delete_account()"
                >
                  Delete Account
                </a>
              </div>
              <div className="w-full mb-4 flex msm:justify-end xxsm:justify-start ">
                <button
                  className="px-6 py-3 border border-primary text-white bg-primary rounded-md font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="submit"
                  id="button-addon3"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </PatientDashboardBase>


    </>

  )
}

export default PatientProfile