
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Table from '../components/Tabel';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.3,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const labels1 = ["Oct-23", "Sep-23", "Aug-23", "Jul-23", "Jun-23", "May-23", "Apr-23", "Mar-23", "Feb-23", "Jan-23", "Dec-22", "Nov-22"];

export const data1 = {
    labels: labels1,
    datasets: [
        {
            label: 'Appointments',
            data: labels1.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const labels2 = ["Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr", "Mar", "Feb", "Jan", "Dec", "Nov"];


export const data2 = {
    labels: labels2,
    datasets: [
        {
            label: 'Patient',
            data: labels2.map(() => faker.datatype.number({ min: 0, max: 5 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Doctor',
            data: labels2.map(() => faker.datatype.number({ min: 0, max: 5 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


const doctorColumns = [
    {
        name: 'Doctor Name',
        selector: row => row.name,
        sortable: true,
        cell: row => (
            <>
                <a href="#"
                    className="avatar avatar-sm mr-2">
                    <img className="avatar-img rounded-circle"
                        src="./651cff1f1bbbc.png"
                        alt="User Image" /></a>
                    <br/>
                <a href="#">{row.name}</a>
            </>
        )
    },
    {
        name: 'Doctor Based On',
        selector: row => row.baseOn,
        sortable: true,
    },
    {
        name: 'Treatments',
        selector: row => row.treatments,
        sortable: true,
    },
    {
        name: 'Reviews',
        selector: row => row.reviews,
        sortable: true,
        cell: row=>(
            <>
            {Array(5).fill().map((_,i)=>i<row.reviews).map(i=>(i?<FaStar/>:<FaRegStar/>))}
            </>
        )
    },
];

const doctorData = [
    {
        name: 'Demo Doctor',
        baseOn: 'Commission',
        treatments: "Demo Treatment",
        reviews: 5,
    },
    {
        name: 'Demo Doctor2',
        baseOn: 'Commission',
        treatments: "Demo Treatment",
        reviews: 3,
    },
]


const patientColumns = [
    {
        name: 'Patient Name',
        selector: row => row.name,
        sortable: true,
        cell: row => (
            <>
                <a href="#"
                    className="avatar avatar-sm mr-2">
                    <img className="avatar-img rounded-circle"
                        src="./651cff1f1bbbc.png"
                        alt="User Image" /></a>
                    <br/>
                <a href="#">{row.name}</a>
            </>
        )
    },
    {
        name: 'Phone',
        selector: row => row.phone,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true,
    },
];

const patientData = [
    {
        name: 'Abdul Samad',
        phone:"12345678",
        email:"abdul@gmail.com",
        gender:"Male",
    },
    {
        name: 'Ali Raza',
        phone:"12345678",
        email:"ali@gmail.com",
        gender:"Male",
    },
    {
        name: 'Code With Love',
        phone:"12345678",
        email:"code@gmail.com",
        gender:"Male",
    },
    {
        name: 'Haider',
        phone:"12345678",
        email:"haider@gmail.com",
        gender:"Male",
    },
    {
        name: 'Hamza Masood',
        phone:"12345678",
        email:"hamza@gmail.com",
        gender:"Male",
    },
]

import { FaUser, FaHome, FaHospital, FaUserInjured, FaSignOutAlt, FaCog, FaNewspaper, FaFile, FaBars, FaStar, FaRegStar } from 'react-icons/fa'
import DashboardBase from '../components/DashboardBase'

const DashboardHome = props => {
    return (
        <DashboardBase title={"Dashboard"} path={"Dashboard"}>
            <div className="section-body">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-primary cent-cont">
                                <FaUser className='far cent-child' />
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Total Patients</h4>
                                </div>
                                <div className="card-body">
                                    <h3>5</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-danger cent-cont">
                                <FaNewspaper className='far cent-child' />
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h6 className="text-muted">Appointment</h6>
                                </div>
                                <div className="card-body">
                                    <h3>0</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-warning cent-cont">
                                <FaFile className='far cent-child' />
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h6 className="text-muted">Doctors</h6>
                                </div>
                                <div className="card-body">
                                    <h3>1</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="card card-chart">
                        <div className="card-header">
                            <h4 className="card-title">Appointments</h4>
                        </div>
                        <div className="card-body"><Line options={options} data={data1} /></div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="card card-chart">
                        <div className="card-header">
                            <h4 className="card-title">Doctor - patients</h4>
                        </div>
                        <div className="card-body"><Line options={options} data={data2} /> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="card card-table flex-fill">
                        <div className="card-header">
                            <h4 className="card-title">Doctors List</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                columns={doctorColumns}
                                data={doctorData}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="card  card-table flex-fill">
                        <div className="card-header">
                            <h4 className="card-title">Latest Patients List</h4>
                        </div>
                        <div className="card-body">
                            <Table 
                            data={patientData}
                            columns={patientColumns}
                            />
                         </div>
                    </div>
                    {/* /Patient Activity */}
                </div>
            </div>
        </DashboardBase>
    )
}

export default DashboardHome;