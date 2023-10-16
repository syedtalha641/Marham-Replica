// import '../assets/datatables.min'
// import '../assets/datatables.min.css'
import '../assets/fontawesome.css'


import 'chart.js'


import { FaUser, FaHome, FaHospital, FaUserInjured, FaSignOutAlt, FaCog, FaNewspaper, FaFile, FaBars, FaPrint, FaCopy, FaFileExcel, FaFileCsv, FaFilePdf, FaEdit, FaTrash, FaPlus, FaTrashAlt, FaEye } from 'react-icons/fa'
import DashboardBase from '../components/DashboardBase'
import Table from '../components/Tabel'


const patientColumns = [
    {
        name: '#',
        selector: row => row.no,
        sortable: true,
    },
    {
        name: 'User Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        cell: row => (
            <>
                <label className="cursor-pointer"><input checked={row.status} type="checkbox" id="status3" className="custom-switch-input" name="status" /><span className="custom-switch-indicator"></span></label>
            </>
        )
    },
    {
        name: "Action",
        cell: row => (
            <>
                <a className="text-success" href="#/3/edit">
                    <i className="far"><FaEye color='skyblue'/></i>
                    <i className="far"><FaEdit/></i>
                    <i className="far"><FaTrashAlt color='red'/></i>
                </a>
            </>
        )
    }
];

const patientData = [
    {
        no:1,
        name: 'Abdul Samad',
        email:"abdul@gmail.com",
        status:true,
    },
    {
        no:2,
        name: 'Ali Raza',
        email:"ali@gmail.com",
        status:true,
    },
    {
        no:3,
        name: 'Code With Love',
        email:"code@gmail.com",
        status:false,
    },
    {
        no:4,
        name: 'Haider',
        email:"haider@gmail.com",
        status:true,
    },
    {
        no:5,
        name: 'Hamza Masood',
        email:"hamza@gmail.com",
        status:false,
    },
]

const DashboardPatient = props => {
    return (
        <DashboardBase title={"Patient"} path={"Patient"}>
            <div className="section_body">
                <div className="card">
                    <div className="card-header w-100 text-right d-flex justify-content-between">
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle export-btns"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Export
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* <a
                                    className="dropdown-item has-icon"
                                    href="#"
                                    id="export_print"
                                >
                                    <span className="navi-icon">
                                        <i className="fa" ><FaPrint /></i>
                                    </span>
                                    <span className="navi-text ml-2">Print</span>
                                </a>
                                <a
                                    className="dropdown-item has-icon"
                                    href="#"
                                    id="export_copy"
                                >
                                    <span className="navi-icon">
                                        <i className="fa " ><FaCopy /></i>
                                    </span>
                                    <span className="navi-text ml-2">Copy</span>
                                </a>
                                <a
                                    className="dropdown-item has-icon"
                                    href="#"
                                    id="export_excel"
                                >
                                    <span className="navi-icon">
                                        <i className="fa" ><FaFileExcel /></i>
                                    </span>
                                    <span className="navi-text ml-2">Excel</span>
                                </a> */}
                                <a
                                    className="dropdown-item has-icon"
                                    href="#"
                                    id="export_csv"
                                >
                                    <span className="navi-icon">
                                        <i className="fa" ><FaFileCsv /></i>
                                    </span>
                                    <span className="navi-text ml-2">CSV</span>
                                </a>
                                {/* <a
                                    className="dropdown-item has-icon"
                                    href="#"
                                    id="export_pdf"
                                >
                                    <span className="navi-icon">
                                        <i className="fa" ><FaFilePdf /></i>
                                    </span>
                                    <span className="navi-text ml-2">PDF</span>
                                </a> */}
                            </div>
                        </div>
                        <a href="#/create">
                            Add New
                        </a>
                    </div>
                    <div className="card-body">
                        <Table
                            data={patientData}
                            columns={patientColumns}
                        />
                    </div>
                    <div className="card-footer">
                        <input
                            type="button"
                            defaultValue="delete selected"
                            // onclick="deleteAll('hospital_all_delete')"
                            className="btn btn-primary"
                        />
                    </div>
                </div>
            </div>

        </DashboardBase>
    )
}

export default DashboardPatient;