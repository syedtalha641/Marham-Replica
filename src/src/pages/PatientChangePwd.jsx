

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import PatientDashboardBase from '../components/PatientDashboardBase';

import {FaEye } from 'react-icons/fa'


const PatientChangePwd = props => {
    return (
        <PatientDashboardBase>
        <div className="w-full sm:ml-0 xxsm:ml-0 flex justify-center items-center shadow-lg p-5 mt-10 xmd:mt-0">
            <form
                action="https://health.mgyourstorymatters.com/update_change_password"
                method="post"
                className="h-100"
            >
                <input
                    type="hidden"
                    name="_token"
                    defaultValue="sByW4wU2efWlIi3WBRfUJC5X8LdPARzao2Ny9aVo"
                />
                <div className="p-2">
                    <p className="font-fira-sans font-medium text-2xl leading-10 pb-5">
                        Change Password
                    </p>
                    <div className="w-fit justify-center">
                        <div className="">
                            <div className="mb-3 xl:w-96">
                                <label htmlFor="current_password font-fira-sans font-medium text-base text-gray leading-5">
                                    Current Password
                                </label>
                                <div className="flex w-full mb-4">
                                    <input
                                        type="password"
                                        name="old_password"
                                        className="border-l border-r-[0px] border-t border-b border-white-100 password relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out m-0 focus:outline-none"
                                        placeholder="Old password"
                                        aria-label="Search"
                                        aria-describedby="button-addon3"
                                    />
                                    <button
                                        className="eye px-6 py-2 border-l-[0px] border-r border-t border-b border-white-100 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        type="button"
                                        id="button-addon3"
                                    >
                                        <i className="fa text-[#666666]" aria-hidden="true" ><FaEye/></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 xl:w-96">
                                <label htmlFor="new_password font-fira-sans font-medium text-base text-gray leading-5">
                                    New Password
                                </label>
                                <div className="flex w-full mb-4">
                                    <input
                                        type="password"
                                        name="new_password"
                                        className="border-l border-r-[0px] border-t border-b border-white-100 password relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out m-0 focus:outline-none"
                                        placeholder="New password"
                                        aria-label="Search"
                                        aria-describedby="button-addon3"
                                    />
                                    <button
                                        className="eye px-6 py-2  border-l-[0px] border-r border-t border-b border-white-100 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        type="button"
                                        id="button-addon3"
                                    >
                                        <i className="fa text-[#666666]" aria-hidden="true" ><FaEye/></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 xl:w-96">
                                <label htmlFor="confirm_password font-fira-sans font-medium text-base text-gray leading-5">
                                    Confirm Password
                                </label>
                                <div className="flex w-full mb-4">
                                    <input
                                        type="password"
                                        name="confirm_new_password"
                                        className="border-l border-r-[0px] border-t border-b border-white-100 password relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out m-0 focus:outline-none"
                                        placeholder="Confirm Password"
                                        aria-label="Search"
                                        aria-describedby="button-addon3"
                                    />
                                    <button
                                        className="eye px-6 py-2  border-l-[0px] border-r border-t border-b border-white-100 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        type="button"
                                        id="button-addon3"
                                    >
                                        <i className="fa text-[#666666]" aria-hidden="true" ><FaEye/></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 xl:w-96">
                                <div className="flex w-full mb-4 justify-center">
                                    <button
                                        className="px-6 py-2 border border-primary text-white rounded-md bg-primary font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        type="submit"
                                        id="button-addon3"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </PatientDashboardBase>
    )
}

export default PatientChangePwd