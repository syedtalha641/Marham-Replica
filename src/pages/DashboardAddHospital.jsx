// import '../assets/datatables.min'
// import '../assets/datatables.min.css'
import '../assets/fontawesome.css'

import TagsInput from 'react-tagsinput'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
      lat: 40.7128,
      lng: -74.0060
    },
    zoom: 11
  };

import { FaUser, FaHome, FaHospital, FaUserInjured, FaSignOutAlt, FaCog, FaNewspaper, FaFile, FaBars, FaPrint, FaCopy, FaFileExcel, FaFileCsv, FaFilePdf, FaEdit, FaTrash, FaPlus, FaTrashAlt } from 'react-icons/fa'

import DashboardBase from '../components/DashboardBase'
import { useState } from 'react'


const DashboardAddHospital = props => {

    const [tags,setTags] = useState([])

    const handleChange = (tags) => {
        setTags(tags)
    }

    return (
        <DashboardBase title={"Add Hospital"} path={"Add Hospital"}>
            <div className="section_body">
                <div className="card">
                    <form
                        action="#/hospital"
                        method="post"
                        className="myform"
                    >
                        <div className="card-body">
                            <div className="form-group">
                                <label className="col-form-label">Hospital Name</label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    name="name"
                                    className="form-control "
                                />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Phone number</label>
                                <input
                                    type="number"
                                    min={1}
                                    defaultValue=""
                                    name="phone"
                                    className="form-control "
                                />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Hospital Facility</label>
                                <div className="bootstrap-tagsinput h-full">
                                <TagsInput className="input-tags form-control " value={tags} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="pac-card col-md-12 mb-3" id="pac-card">
                                    <label htmlFor="pac-input col-form-label">
                                        Location based on latitude/longitude
                                    </label>
                                    <div id="pac-container">
                                        <input
                                            id="pac-input"
                                            type="text"
                                            name="address"
                                            className="form-control pac-target-input"
                                            placeholder="Enter a query"
                                            autoComplete="off"
                                        />
                                        <input
                                            type="hidden"
                                            name="lat"
                                            defaultValue="40.7127281"
                                            id="lat"
                                        />
                                        <input
                                            type="hidden"
                                            name="lng"
                                            defaultValue="-74.0060152"
                                            id="lng"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">

                                <div style={{ height: '100vh', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    >
                                    </GoogleMapReact>
                                    </div>

                                    {/* <div
                                        id="map"
                                        className="mapClass"
                                        style={{ position: "relative", overflow: "hidden" }}
                                    >
                                        <div
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                backgroundColor: "rgb(229, 227, 223)"
                                            }}
                                        >
                                            <div
                                                className="gm-style"
                                                style={{
                                                    position: "absolute",
                                                    zIndex: 0,
                                                    left: 0,
                                                    top: 0,
                                                    height: "100%",
                                                    width: "100%",
                                                    padding: 0,
                                                    borderWidth: 0,
                                                    margin: 0
                                                }}
                                            >
                                                <div>
                                                    <button
                                                        draggable="false"
                                                        aria-label="Keyboard shortcuts"
                                                        title="Keyboard shortcuts"
                                                        type="button"
                                                        style={{
                                                            background: "none transparent",
                                                            display: "block",
                                                            border: "none",
                                                            margin: 0,
                                                            padding: 0,
                                                            textTransform: "none",
                                                            appearance: "none",
                                                            position: "absolute",
                                                            cursor: "pointer",
                                                            userSelect: "none",
                                                            zIndex: 1000002,
                                                            outlineOffset: 3,
                                                            right: 0,
                                                            bottom: 0,
                                                            transform: "translateX(100%)"
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    aria-label="Map"
                                                    aria-roledescription="map"
                                                    role="region"
                                                    style={{
                                                        position: "absolute",
                                                        zIndex: 0,
                                                        left: 0,
                                                        top: 0,
                                                        height: "100%",
                                                        width: "100%",
                                                        padding: 0,
                                                        borderWidth: 0,
                                                        margin: 0,
                                                        cursor:
                                                            'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                                                        touchAction: "pan-x pan-y"
                                                    }}
                                                    aria-describedby="964336B0-692B-45FC-A20A-45BAA4B78EFE"
                                                >
                                                    <div
                                                        style={{
                                                            zIndex: 1,
                                                            position: "absolute",
                                                            left: "50%",
                                                            top: "50%",
                                                            width: "100%",
                                                            willChange: "transform",
                                                            transform: "translate(0px, 0px)"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                zIndex: 100,
                                                                width: "100%"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 0
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        zIndex: 987,
                                                                        transform: "matrix(1, 0, 0, 1, -244, -9)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 768,
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 768,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: "-256px",
                                                                            width: 256,
                                                                            height: 256
                                                                        }}
                                                                    >
                                                                        <div style={{ width: 256, height: 256 }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                zIndex: 101,
                                                                width: "100%"
                                                            }}
                                                        />
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                zIndex: 102,
                                                                width: "100%"
                                                            }}
                                                        />
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                zIndex: 103,
                                                                width: "100%"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: -1
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        zIndex: 987,
                                                                        transform: "matrix(1, 0, 0, 1, -244, -9)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 768,
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: 768,
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: "-256px"
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: 26,
                                                                    height: 37,
                                                                    overflow: "hidden",
                                                                    position: "absolute",
                                                                    left: "-13px",
                                                                    top: "-37px",
                                                                    zIndex: 0
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    src="./Health Care _ Add hospital_files/spotlight-poi3_hdpi.png"
                                                                    draggable="false"
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        width: 26,
                                                                        height: 37,
                                                                        userSelect: "none",
                                                                        border: 0,
                                                                        padding: 0,
                                                                        margin: 0,
                                                                        maxWidth: "none"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                zIndex: 0
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    zIndex: 987,
                                                                    transform: "matrix(1, 0, 0, 1, -244, -9)"
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(1)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: "-256px",
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(2)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 768,
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(3)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 768,
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(4)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 256,
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(5)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: "-512px",
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(6)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: "-512px",
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(7)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 512,
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(8)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 256,
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(9)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: "-256px",
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(10)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: "-256px",
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(11)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 512,
                                                                        top: 0,
                                                                        width: 256,
                                                                        height: 256,
                                                                        transition: "opacity 200ms linear 0s"
                                                                    }}
                                                                >
                                                                    <img
                                                                        draggable="false"
                                                                        alt=""
                                                                        role="presentation"
                                                                        src="./Health Care _ Add hospital_files/vt(12)"
                                                                        style={{
                                                                            width: 256,
                                                                            height: 256,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            zIndex: 3,
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            padding: 0,
                                                            borderWidth: 0,
                                                            margin: 0,
                                                            left: 0,
                                                            top: 0,
                                                            touchAction: "pan-x pan-y"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                zIndex: 4,
                                                                position: "absolute",
                                                                left: "50%",
                                                                top: "50%",
                                                                width: "100%",
                                                                willChange: "transform",
                                                                transform: "translate(0px, 0px)"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 104,
                                                                    width: "100%"
                                                                }}
                                                            ></div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 105,
                                                                    width: "100%"
                                                                }}
                                                            ></div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 106,
                                                                    width: "100%"
                                                                }}
                                                            >
                                                                <span
                                                                    id="CFC200C6-8823-4311-9A92-62C1AB53A2F6"
                                                                    style={{ display: "none" }}
                                                                >
                                                                    To navigate, press the arrow keys.
                                                                </span>
                                                                <div
                                                                    tabIndex={-1}
                                                                    style={{
                                                                        width: 26,
                                                                        height: 37,
                                                                        overflow: "hidden",
                                                                        position: "absolute",
                                                                        left: "-13px",
                                                                        top: "-37px",
                                                                        zIndex: 0
                                                                    }}
                                                                >
                                                                    <img
                                                                        alt=""
                                                                        src="./Health Care _ Add hospital_files/transparent.png"
                                                                        draggable="false"
                                                                        useMap="#gmimap0"
                                                                        style={{
                                                                            width: 26,
                                                                            height: 37,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none"
                                                                        }}
                                                                    />
                                                                    <map name="gmimap0" id="gmimap0">
                                                                        <area
                                                                            log="miw"
                                                                            coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                                                            shape="poly"
                                                                            tabIndex={-1}
                                                                            title=""
                                                                            style={{
                                                                                display: "inline",
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                cursor: "pointer",
                                                                                touchAction: "none"
                                                                            }}
                                                                        />
                                                                    </map>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 107,
                                                                    width: "100%"
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="gm-style-moc"
                                                        style={{
                                                            zIndex: 4,
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            padding: 0,
                                                            borderWidth: 0,
                                                            margin: 0,
                                                            left: 0,
                                                            top: 0,
                                                            opacity: 0
                                                        }}
                                                    >
                                                        <p className="gm-style-mot" />
                                                    </div>
                                                    <div
                                                        className="LGLeeN-keyboard-shortcuts-view"
                                                        id="964336B0-692B-45FC-A20A-45BAA4B78EFE"
                                                        style={{ display: "none" }}
                                                    >
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <kbd aria-label="Left arrow">←</kbd>
                                                                    </td>
                                                                    <td aria-label="Move left.">Move left</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd aria-label="Right arrow">→</kbd>
                                                                    </td>
                                                                    <td aria-label="Move right.">Move right</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd aria-label="Up arrow">↑</kbd>
                                                                    </td>
                                                                    <td aria-label="Move up.">Move up</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd aria-label="Down arrow">↓</kbd>
                                                                    </td>
                                                                    <td aria-label="Move down.">Move down</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>+</kbd>
                                                                    </td>
                                                                    <td aria-label="Zoom in.">Zoom in</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>-</kbd>
                                                                    </td>
                                                                    <td aria-label="Zoom out.">Zoom out</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>Home</kbd>
                                                                    </td>
                                                                    <td aria-label="Jump left by 75%.">
                                                                        Jump left by 75%
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>End</kbd>
                                                                    </td>
                                                                    <td aria-label="Jump right by 75%.">
                                                                        Jump right by 75%
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>Page Up</kbd>
                                                                    </td>
                                                                    <td aria-label="Jump up by 75%.">Jump up by 75%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <kbd>Page Down</kbd>
                                                                    </td>
                                                                    <td aria-label="Jump down by 75%.">
                                                                        Jump down by 75%
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <iframe
                                                    aria-hidden="true"
                                                    frameBorder={0}
                                                    tabIndex={-1}
                                                    style={{
                                                        zIndex: -1,
                                                        position: "absolute",
                                                        width: "100%",
                                                        height: "100%",
                                                        top: 0,
                                                        left: 0,
                                                        border: "none"
                                                    }}
                                                    src="./Health Care _ Add hospital_files/saved_resource.html"
                                                />
                                                <div
                                                    style={{
                                                        pointerEvents: "none",
                                                        width: "100%",
                                                        height: "100%",
                                                        boxSizing: "border-box",
                                                        position: "absolute",
                                                        zIndex: 1000002,
                                                        opacity: 0,
                                                        border: "2px solid rgb(26, 115, 232)"
                                                    }}
                                                ></div>
                                                <div>
                                                    <div
                                                        className="gmnoprint"
                                                        role="menubar"
                                                        style={{
                                                            margin: 10,
                                                            zIndex: 0,
                                                            position: "absolute",
                                                            cursor: "pointer",
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    >
                                                        <div
                                                            className="gm-style-mtc"
                                                            style={{ float: "left", position: "relative" }}
                                                        >
                                                            <button
                                                                draggable="false"
                                                                aria-label="Show street map"
                                                                title="Show street map"
                                                                type="button"
                                                                role="menuitemradio"
                                                                aria-checked="true"
                                                                aria-haspopup="true"
                                                                style={{
                                                                    background: "none padding-box rgb(255, 255, 255)",
                                                                    display: "table-cell",
                                                                    border: 0,
                                                                    margin: 0,
                                                                    padding: "0px 17px",
                                                                    textTransform: "none",
                                                                    appearance: "none",
                                                                    position: "relative",
                                                                    cursor: "pointer",
                                                                    userSelect: "none",
                                                                    direction: "ltr",
                                                                    overflow: "hidden",
                                                                    textAlign: "center",
                                                                    height: 40,
                                                                    verticalAlign: "middle",
                                                                    color: "rgb(0, 0, 0)",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 18,
                                                                    borderBottomLeftRadius: 2,
                                                                    borderTopLeftRadius: 2,
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    minWidth: 35,
                                                                    fontWeight: 500
                                                                }}
                                                                id="2E64DA2E-25FA-42C2-8053-714A0E921D5D"
                                                            >
                                                                Map
                                                            </button>
                                                            <ul
                                                                role="menu"
                                                                aria-labelledby="2E64DA2E-25FA-42C2-8053-714A0E921D5D"
                                                                style={{
                                                                    backgroundColor: "white",
                                                                    listStyle: "none",
                                                                    padding: 2,
                                                                    margin: 0,
                                                                    zIndex: -1,
                                                                    borderBottomLeftRadius: 2,
                                                                    borderBottomRightRadius: 2,
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 40,
                                                                    textAlign: "left",
                                                                    display: "none"
                                                                }}
                                                            >
                                                                <li
                                                                    tabIndex={-1}
                                                                    role="menuitemcheckbox"
                                                                    aria-label="Terrain"
                                                                    draggable="false"
                                                                    title="Show street map with terrain"
                                                                    aria-checked="false"
                                                                    className="ssQIHO-checkbox-menu-item"
                                                                    style={{
                                                                        color: "black",
                                                                        fontFamily: "Roboto, Arial, sans-serif",
                                                                        userSelect: "none",
                                                                        fontSize: 18,
                                                                        backgroundColor: "rgb(255, 255, 255)",
                                                                        padding: "5px 8px 5px 5px",
                                                                        direction: "ltr",
                                                                        textAlign: "left",
                                                                        whiteSpace: "nowrap"
                                                                    }}
                                                                >
                                                                    <span>
                                                                        <span
                                                                            style={{
                                                                                WebkitMaskImage:
                                                                                    'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E")',
                                                                                height: "1em",
                                                                                width: "1em",
                                                                                transform: "translateY(0.15em)",
                                                                                display: "none"
                                                                            }}
                                                                        />
                                                                        <span
                                                                            style={{
                                                                                WebkitMaskImage:
                                                                                    'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E")',
                                                                                height: "1em",
                                                                                width: "1em",
                                                                                transform: "translateY(0.15em)"
                                                                            }}
                                                                        />
                                                                    </span>
                                                                    <label style={{ cursor: "inherit" }}>Terrain</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            className="gm-style-mtc"
                                                            style={{ float: "left", position: "relative" }}
                                                        >
                                                            <button
                                                                draggable="false"
                                                                aria-label="Show satellite imagery"
                                                                title="Show satellite imagery"
                                                                type="button"
                                                                role="menuitemradio"
                                                                aria-checked="false"
                                                                aria-haspopup="true"
                                                                style={{
                                                                    background: "none padding-box rgb(255, 255, 255)",
                                                                    display: "table-cell",
                                                                    border: 0,
                                                                    margin: 0,
                                                                    padding: "0px 17px",
                                                                    textTransform: "none",
                                                                    appearance: "none",
                                                                    position: "relative",
                                                                    cursor: "pointer",
                                                                    userSelect: "none",
                                                                    direction: "ltr",
                                                                    overflow: "hidden",
                                                                    textAlign: "center",
                                                                    height: 40,
                                                                    verticalAlign: "middle",
                                                                    color: "rgb(86, 86, 86)",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 18,
                                                                    borderBottomRightRadius: 2,
                                                                    borderTopRightRadius: 2,
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    minWidth: 64
                                                                }}
                                                                id="BA22B4E4-E508-4B5F-9922-6599C102D504"
                                                            >
                                                                Satellite
                                                            </button>
                                                            <ul
                                                                role="menu"
                                                                aria-labelledby="BA22B4E4-E508-4B5F-9922-6599C102D504"
                                                                style={{
                                                                    backgroundColor: "white",
                                                                    listStyle: "none",
                                                                    padding: 2,
                                                                    margin: 0,
                                                                    zIndex: -1,
                                                                    borderBottomLeftRadius: 2,
                                                                    borderBottomRightRadius: 2,
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    position: "absolute",
                                                                    right: 0,
                                                                    top: 40,
                                                                    textAlign: "left",
                                                                    display: "none"
                                                                }}
                                                            >
                                                                <li
                                                                    tabIndex={-1}
                                                                    role="menuitemcheckbox"
                                                                    aria-label="Labels"
                                                                    draggable="false"
                                                                    title="Show imagery with street names"
                                                                    aria-checked="true"
                                                                    className="ssQIHO-checkbox-menu-item"
                                                                    style={{
                                                                        color: "black",
                                                                        fontFamily: "Roboto, Arial, sans-serif",
                                                                        userSelect: "none",
                                                                        fontSize: 18,
                                                                        backgroundColor: "rgb(255, 255, 255)",
                                                                        padding: "5px 8px 5px 5px",
                                                                        direction: "ltr",
                                                                        textAlign: "left",
                                                                        whiteSpace: "nowrap"
                                                                    }}
                                                                >
                                                                    <span>
                                                                        <span
                                                                            style={{
                                                                                WebkitMaskImage:
                                                                                    'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E")',
                                                                                height: "1em",
                                                                                width: "1em",
                                                                                transform: "translateY(0.15em)"
                                                                            }}
                                                                        />
                                                                        <span
                                                                            style={{
                                                                                WebkitMaskImage:
                                                                                    'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E")',
                                                                                height: "1em",
                                                                                width: "1em",
                                                                                transform: "translateY(0.15em)",
                                                                                display: "none"
                                                                            }}
                                                                        />
                                                                    </span>
                                                                    <label style={{ cursor: "inherit" }}>Labels</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div />
                                                <div />
                                                <div />
                                                <div>
                                                    <button
                                                        draggable="false"
                                                        aria-label="Toggle fullscreen view"
                                                        title="Toggle fullscreen view"
                                                        type="button"
                                                        aria-pressed="false"
                                                        className="gm-control-active gm-fullscreen-control"
                                                        style={{
                                                            background: "none rgb(255, 255, 255)",
                                                            border: 0,
                                                            margin: 10,
                                                            padding: 0,
                                                            textTransform: "none",
                                                            appearance: "none",
                                                            position: "absolute",
                                                            cursor: "pointer",
                                                            userSelect: "none",
                                                            borderRadius: 2,
                                                            height: 40,
                                                            width: 40,
                                                            boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                            overflow: "hidden",
                                                            top: 0,
                                                            right: 0
                                                        }}
                                                    >
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                            alt=""
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                            alt=""
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                            alt=""
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                    </button>
                                                </div>
                                                <div />
                                                <div />
                                                <div />
                                                <div />
                                                <div>
                                                    <div
                                                        className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                                        draggable="false"
                                                        data-control-width={40}
                                                        data-control-height={153}
                                                        style={{
                                                            margin: 10,
                                                            userSelect: "none",
                                                            position: "absolute",
                                                            bottom: 167,
                                                            right: 40
                                                        }}
                                                    >
                                                        <div
                                                            className="gmnoprint"
                                                            data-control-width={40}
                                                            data-control-height={40}
                                                            style={{ display: "none", position: "absolute" }}
                                                        >
                                                            <div
                                                                style={{
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    borderRadius: 2,
                                                                    width: 40,
                                                                    height: 40
                                                                }}
                                                            >
                                                                <button
                                                                    draggable="false"
                                                                    aria-label="Rotate map clockwise"
                                                                    title="Rotate map clockwise"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "none",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        textTransform: "none",
                                                                        appearance: "none",
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        left: 0,
                                                                        top: 0,
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40
                                                                    }}
                                                                >
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                </button>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        overflow: "hidden",
                                                                        width: 30,
                                                                        height: 1,
                                                                        margin: "0px 5px",
                                                                        backgroundColor: "rgb(230, 230, 230)",
                                                                        display: "none"
                                                                    }}
                                                                ></div>
                                                                <button
                                                                    draggable="false"
                                                                    aria-label="Rotate map counterclockwise"
                                                                    title="Rotate map counterclockwise"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "none",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        textTransform: "none",
                                                                        appearance: "none",
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        left: 0,
                                                                        top: 0,
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40,
                                                                        transform: "scaleX(-1)"
                                                                    }}
                                                                >
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 20, height: 20 }}
                                                                    />
                                                                </button>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        overflow: "hidden",
                                                                        width: 30,
                                                                        height: 1,
                                                                        margin: "0px 5px",
                                                                        backgroundColor: "rgb(230, 230, 230)",
                                                                        display: "none"
                                                                    }}
                                                                ></div>
                                                                <button
                                                                    draggable="false"
                                                                    aria-label="Tilt map"
                                                                    title="Tilt map"
                                                                    type="button"
                                                                    className="gm-tilt gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        textTransform: "none",
                                                                        appearance: "none",
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        top: 0,
                                                                        left: 0,
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40
                                                                    }}
                                                                >
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                    <img
                                                                        alt=""
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button
                                                            draggable="false"
                                                            aria-label="Drag Pegman onto the map to open Street View"
                                                            title="Drag Pegman onto the map to open Street View"
                                                            type="button"
                                                            className="gm-svpc"
                                                            dir="ltr"
                                                            data-control-width={40}
                                                            data-control-height={40}
                                                            style={{
                                                                background: "rgb(255, 255, 255)",
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                textTransform: "none",
                                                                appearance: "none",
                                                                position: "absolute",
                                                                cursor:
                                                                    'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                                                                userSelect: "none",
                                                                boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                borderRadius: 2,
                                                                width: 40,
                                                                height: 40,
                                                                touchAction: "none",
                                                                left: 0,
                                                                top: 0
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: "50%",
                                                                    top: "50%"
                                                                }}
                                                            />
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: "50%",
                                                                    top: "50%"
                                                                }}
                                                            >
                                                                <img
                                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2023%2038%22%3E%3Cpath%20d%3D%22M16.6%2038.1h-5.5l-.2-2.9-.2%202.9h-5.5L5%2025.3l-.8%202a1.53%201.53%200%2001-1.9.9l-1.2-.4a1.58%201.58%200%2001-1-1.9v-.1c.3-.9%203.1-11.2%203.1-11.2a2.66%202.66%200%20012.3-2l.6-.5a6.93%206.93%200%20014.7-12%206.8%206.8%200%20014.9%202%207%207%200%20012%204.9%206.65%206.65%200%2001-2.2%205l.7.5a2.78%202.78%200%20012.4%202s2.9%2011.2%202.9%2011.3a1.53%201.53%200%2001-.9%201.9l-1.3.4a1.63%201.63%200%2001-1.9-.9l-.7-1.8-.1%2012.7zm-3.6-2h1.7L14.9%2020.3l1.9-.3%202.4%206.3.3-.1c-.2-.8-.8-3.2-2.8-10.9a.63.63%200%2000-.6-.5h-.6l-1.1-.9h-1.9l-.3-2a4.83%204.83%200%20003.5-4.7A4.78%204.78%200%200011%202.3H10.8a4.9%204.9%200%2000-1.4%209.6l-.3%202h-1.9l-1%20.9h-.6a.74.74%200%2000-.6.5c-2%207.5-2.7%2010-3%2010.9l.3.1L4.8%2020l1.9.3.2%2015.8h1.6l.6-8.4a1.52%201.52%200%20011.5-1.4%201.5%201.5%200%20011.5%201.4l.9%208.4zm-10.9-9.6zm17.5-.1z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23333%22%20opacity%3D%22.7%22/%3E%3Cpath%20d%3D%22M5.9%2013.6l1.1-.9h7.8l1.2.9%22%20fill%3D%22%23ce592c%22/%3E%3Cellipse%20cx%3D%2210.9%22%20cy%3D%2213.1%22%20rx%3D%222.7%22%20ry%3D%22.3%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ce592c%22%20opacity%3D%22.5%22/%3E%3Cpath%20d%3D%22M20.6%2026.1l-2.9-11.3a1.71%201.71%200%2000-1.6-1.2H5.699999999999999a1.69%201.69%200%2000-1.5%201.3l-3.1%2011.3a.61.61%200%2000.3.7l1.1.4a.61.61%200%2000.7-.3l2.7-6.7.2%2016.8h3.6l.6-9.3a.47.47%200%2001.44-.5h.06c.4%200%20.4.2.5.5l.6%209.3h3.6L15.7%2020.3l2.5%206.6a.52.52%200%2000.66.31l1.2-.4a.57.57%200%2000.5-.7z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M7%2013.6l3.9%206.7%203.9-6.7%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Ccircle%20cx%3D%2210.9%22%20cy%3D%227%22%20r%3D%225.9%22%20fill%3D%22%23fdbf2d%22/%3E%3C/svg%3E"
                                                                    alt="Street View Pegman Control"
                                                                    style={{
                                                                        height: 30,
                                                                        width: 30,
                                                                        position: "absolute",
                                                                        transform: "translate(-50%, -50%)",
                                                                        pointerEvents: "none"
                                                                    }}
                                                                />
                                                                <img
                                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2038%22%3E%3Cpath%20d%3D%22M22%2026.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3l-2.5-6.6-.2%2016.8h-9.4L6.6%2021l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%26quot%3B%3C/svg%3E"
                                                                    alt="Pegman is on top of the Map"
                                                                    style={{
                                                                        height: 30,
                                                                        width: 30,
                                                                        position: "absolute",
                                                                        transform: "translate(-50%, -50%)",
                                                                        pointerEvents: "none",
                                                                        display: "none"
                                                                    }}
                                                                />
                                                                <img
                                                                    alt="Street View Pegman Control"
                                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2040%2050%22%3E%3Cpath%20d%3D%22M34-30.4l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4-36l-.2%2016.8h-9.4L18.6-36l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7zM34%2029.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4%2024l-.2%2016.8h-9.4L18.6%2024l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%3Cpath%20d%3D%22M15.4%2038.8h-4a1.64%201.64%200%2001-1.4-1.1l-3.1-8a.9.9%200%2001-.5.1l-1.4.1a1.62%201.62%200%2001-1.6-1.4L2.3%2015.4l1.6-1.3a6.87%206.87%200%2001-3-4.6A7.14%207.14%200%20012%204a7.6%207.6%200%20014.7-3.1A7.14%207.14%200%200112.2%202a7.28%207.28%200%20012.3%209.6l2.1-.1.1%201c0%20.2.1.5.1.8a2.41%202.41%200%20011%201s1.9%203.2%202.8%204.9c.7%201.2%202.1%204.2%202.8%205.9a2.1%202.1%200%2001-.8%202.6l-.6.4a1.63%201.63%200%2001-1.5.2l-.6-.3a8.93%208.93%200%2000.5%201.3%207.91%207.91%200%20001.8%202.6l.6.3v4.6l-4.5-.1a7.32%207.32%200%2001-2.5-1.5l-.4%203.6zm-10-19.2l3.5%209.8%202.9%207.5h1.6V35l-1.9-9.4%203.1%205.4a8.24%208.24%200%20003.8%203.8h2.1v-1.4a14%2014%200%2001-2.2-3.1%2044.55%2044.55%200%2001-2.2-8l-1.3-6.3%203.2%205.6c.6%201.1%202.1%203.6%202.8%204.9l.6-.4c-.8-1.6-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a.54.54%200%2000-.4-.3l-.7-.1-.1-.7a4.33%204.33%200%2000-.1-.5l-5.3.3%202.2-1.9a4.3%204.3%200%2000.9-1%205.17%205.17%200%2000.8-4%205.67%205.67%200%2000-2.2-3.4%205.09%205.09%200%2000-4-.8%205.67%205.67%200%2000-3.4%202.2%205.17%205.17%200%2000-.8%204%205.67%205.67%200%20002.2%203.4%203.13%203.13%200%20001%20.5l1.6.6-3.2%202.6%201%2011.5h.4l-.3-8.2z%22%20fill%3D%22%23333%22/%3E%3Cpath%20d%3D%22M3.35%2015.9l1.1%2012.5a.39.39%200%2000.36.42h.14l1.4-.1a.66.66%200%2000.5-.4l-.2-3.8-3.3-8.6z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M5.2%2028.8l1.1-.1a.66.66%200%2000.5-.4l-.2-3.8-1.2-3.1z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.4%2035.7l-3.8-1.2-2.7-7.8L12%2015.5l3.4-2.9c.2%202.4%202.2%2014.1%203.7%2017.1%200%200%201.3%202.6%202.3%203.1v2.9m-8.4-8.1l-2-.3%202.5%2010.1.9.4v-2.9%22%20fill%3D%22%23e5892b%22/%3E%3Cpath%20d%3D%22M17.8%2025.4c-.4-1.5-.7-3.1-1.1-4.8-.1-.4-.1-.7-.2-1.1l-1.1-2-1.7-1.6s.9%205%202.4%207.1a19.12%2019.12%200%20001.7%202.4z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M14.4%2037.8h-3a.43.43%200%2001-.4-.4l-3-7.8-1.7-4.8-3-9%208.9-.4s2.9%2011.3%204.3%2014.4c1.9%204.1%203.1%204.7%205%205.8h-3.2s-4.1-1.2-5.9-7.7a.59.59%200%2000-.6-.4.62.62%200%2000-.3.7s.5%202.4.9%203.6a34.87%2034.87%200%20002%206z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M15.4%2012.7l-3.3%202.9-8.9.4%203.3-2.7%22%20fill%3D%22%23ce592b%22/%3E%3Cpath%20d%3D%22M9.1%2021.1l1.4-6.2-5.9.5%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M12%2013.5a4.75%204.75%200%2001-2.6%201.1c-1.5.3-2.9.2-2.9%200s1.1-.6%202.7-1%22%20fill%3D%22%23bb3d19%22/%3E%3Ccircle%20cx%3D%227.92%22%20cy%3D%228.19%22%20r%3D%226.3%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M4.7%2013.6a6.21%206.21%200%20008.4-1.9v-.1a8.89%208.89%200%2001-8.4%202z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.2%2027.2l.6-.4a1.09%201.09%200%2000.4-1.3c-.7-1.5-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15a1.68%201.68%200%2000-.4%202.1s2.3%203.9%203.1%205.3c.6%201%202.1%203.7%202.9%205.1a.94.94%200%20001.24.49l.16-.09z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M19.4%2019.8c-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15-.3.3c1.1%201.5%202.9%203.8%203.9%205.4%201.1%201.8%202.9%205%203.8%206.7l.1-.1a1.09%201.09%200%2000.4-1.3%2057.67%2057.67%200%2000-2.7-5.6z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3C/svg%3E"
                                                                    style={{
                                                                        display: "none",
                                                                        height: 40,
                                                                        width: 40,
                                                                        position: "absolute",
                                                                        transform: "translate(-60%, -45%)",
                                                                        pointerEvents: "none"
                                                                    }}
                                                                />
                                                            </div>
                                                        </button>
                                                        <div
                                                            className="gmnoprint"
                                                            data-control-width={40}
                                                            data-control-height={81}
                                                            style={{ position: "absolute", left: 0, top: 72 }}
                                                        >
                                                            <div
                                                                draggable="false"
                                                                style={{
                                                                    userSelect: "none",
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    borderRadius: 2,
                                                                    cursor: "pointer",
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    width: 40,
                                                                    height: 81
                                                                }}
                                                            >
                                                                <button
                                                                    draggable="false"
                                                                    aria-label="Zoom in"
                                                                    title="Zoom in"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        textTransform: "none",
                                                                        appearance: "none",
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                </button>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        overflow: "hidden",
                                                                        width: 30,
                                                                        height: 1,
                                                                        margin: "0px 5px",
                                                                        backgroundColor: "rgb(230, 230, 230)",
                                                                        top: 0
                                                                    }}
                                                                ></div>
                                                                <button
                                                                    draggable="false"
                                                                    aria-label="Zoom out"
                                                                    title="Zoom out"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        textTransform: "none",
                                                                        appearance: "none",
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        style={{
                                                            margin: "0px 5px",
                                                            zIndex: 1000000,
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <a
                                                            target="_blank"
                                                            rel="noopener"
                                                            title="Open this area in Google Maps (opens a new window)"
                                                            aria-label="Open this area in Google Maps (opens a new window)"
                                                            href="https://maps.google.com/maps?ll=40.712728,-74.006015&z=13&t=m&hl=en-GB&gl=US&mapclient=apiv3"
                                                            style={{ display: "inline" }}
                                                        >
                                                            <div style={{ width: 66, height: 26 }}>
                                                                <img
                                                                    alt="Google"
                                                                    src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.6%22%20fill%3D%22%23fff%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39011%2024.8656%209.39011%2021.7783%209.39011%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2962%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39011%2035.7387%209.39011%2032.6513%209.39011%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22083v-.75H52.0788V20.4412H55.7387V5.220829999999999z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594z%22%20fill%3D%22%23E94235%22/%3E%3Cpath%20d%3D%22M40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594z%22%20fill%3D%22%23FABB05%22/%3E%3Cpath%20d%3D%22M51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M54.9887%205.22083V19.6912H52.8288V5.220829999999999H54.9887z%22%20fill%3D%22%2334A853%22/%3E%3Cpath%20d%3D%22M63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23E94235%22/%3E%3C/svg%3E"
                                                                    draggable="false"
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        width: 66,
                                                                        height: 26,
                                                                        userSelect: "none",
                                                                        border: 0,
                                                                        padding: 0,
                                                                        margin: 0
                                                                    }}
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div />
                                                <div>
                                                    <div
                                                        style={{
                                                            display: "inline-flex",
                                                            position: "absolute",
                                                            right: 0,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                                                            <div
                                                                draggable="false"
                                                                className="gm-style-cc"
                                                                style={{
                                                                    userSelect: "none",
                                                                    position: "relative",
                                                                    height: 14,
                                                                    lineHeight: 14
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        opacity: "0.7",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        position: "absolute"
                                                                    }}
                                                                >
                                                                    <div style={{ width: 1 }} />
                                                                    <div
                                                                        style={{
                                                                            backgroundColor: "rgb(245, 245, 245)",
                                                                            width: "auto",
                                                                            height: "100%",
                                                                            marginLeft: 1
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        paddingRight: 6,
                                                                        paddingLeft: 6,
                                                                        boxSizing: "border-box",
                                                                        fontFamily: "Roboto, Arial, sans-serif",
                                                                        fontSize: 10,
                                                                        color: "rgb(0, 0, 0)",
                                                                        whiteSpace: "nowrap",
                                                                        direction: "ltr",
                                                                        textAlign: "right",
                                                                        verticalAlign: "middle",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <button
                                                                        draggable="false"
                                                                        aria-label="Keyboard shortcuts"
                                                                        title="Keyboard shortcuts"
                                                                        type="button"
                                                                        style={{
                                                                            background: "none",
                                                                            display: "inline-block",
                                                                            border: 0,
                                                                            margin: 0,
                                                                            padding: 0,
                                                                            textTransform: "none",
                                                                            appearance: "none",
                                                                            position: "relative",
                                                                            cursor: "pointer",
                                                                            userSelect: "none",
                                                                            color: "rgb(0, 0, 0)",
                                                                            fontFamily: "inherit",
                                                                            lineHeight: "inherit"
                                                                        }}
                                                                    >
                                                                        Keyboard shortcuts
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                                                            <div
                                                                draggable="false"
                                                                className="gm-style-cc"
                                                                style={{
                                                                    userSelect: "none",
                                                                    position: "relative",
                                                                    height: 14,
                                                                    lineHeight: 14
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        opacity: "0.7",
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        position: "absolute"
                                                                    }}
                                                                >
                                                                    <div style={{ width: 1 }} />
                                                                    <div
                                                                        style={{
                                                                            backgroundColor: "rgb(245, 245, 245)",
                                                                            width: "auto",
                                                                            height: "100%",
                                                                            marginLeft: 1
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        paddingRight: 6,
                                                                        paddingLeft: 6,
                                                                        boxSizing: "border-box",
                                                                        fontFamily: "Roboto, Arial, sans-serif",
                                                                        fontSize: 10,
                                                                        color: "rgb(0, 0, 0)",
                                                                        whiteSpace: "nowrap",
                                                                        direction: "ltr",
                                                                        textAlign: "right",
                                                                        verticalAlign: "middle",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <button
                                                                        draggable="false"
                                                                        aria-label="Map Data"
                                                                        title="Map Data"
                                                                        type="button"
                                                                        style={{
                                                                            background: "none",
                                                                            border: 0,
                                                                            margin: 0,
                                                                            padding: 0,
                                                                            textTransform: "none",
                                                                            appearance: "none",
                                                                            position: "relative",
                                                                            cursor: "pointer",
                                                                            userSelect: "none",
                                                                            color: "rgb(0, 0, 0)",
                                                                            fontFamily: "inherit",
                                                                            lineHeight: "inherit",
                                                                            display: "none"
                                                                        }}
                                                                    >
                                                                        Map Data
                                                                    </button>
                                                                    <span style={{}}>Map data ©2023 Google</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gmnoscreen">
                                                            <div
                                                                style={{
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 11,
                                                                    color: "rgb(0, 0, 0)",
                                                                    direction: "ltr",
                                                                    textAlign: "right",
                                                                    backgroundColor: "rgb(245, 245, 245)"
                                                                }}
                                                            >
                                                                Map data ©2023 Google
                                                            </div>
                                                        </div>
                                                        <button
                                                            draggable="false"
                                                            aria-label="Map scale: 1 km per 69 pixels"
                                                            title="Map scale: 1 km per 69 pixels"
                                                            type="button"
                                                            className="gm-style-cc"
                                                            aria-describedby="DFA2F243-7B38-41D5-AF1A-11B0F2E7C6C0"
                                                            style={{
                                                                background: "none",
                                                                display: "none",
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                textTransform: "none",
                                                                appearance: "none",
                                                                position: "relative",
                                                                cursor: "pointer",
                                                                userSelect: "none",
                                                                height: 14,
                                                                lineHeight: 14
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    opacity: "0.7",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    position: "absolute"
                                                                }}
                                                            >
                                                                <div style={{ width: 1 }} />
                                                                <div
                                                                    style={{
                                                                        backgroundColor: "rgb(245, 245, 245)",
                                                                        width: "auto",
                                                                        height: "100%",
                                                                        marginLeft: 1
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "relative",
                                                                    paddingRight: 6,
                                                                    paddingLeft: 6,
                                                                    boxSizing: "border-box",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 10,
                                                                    color: "rgb(0, 0, 0)",
                                                                    whiteSpace: "nowrap",
                                                                    direction: "ltr",
                                                                    textAlign: "right",
                                                                    verticalAlign: "middle",
                                                                    display: "inline-block"
                                                                }}
                                                            >
                                                                <span>1 km&nbsp;</span>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        display: "inline-block",
                                                                        height: 8,
                                                                        bottom: "-1px",
                                                                        width: 73
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                            height: 4,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 4,
                                                                            height: 8,
                                                                            left: 0,
                                                                            top: 0,
                                                                            backgroundColor: "rgb(255, 255, 255)"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 4,
                                                                            height: 8,
                                                                            position: "absolute",
                                                                            backgroundColor: "rgb(255, 255, 255)",
                                                                            right: 0,
                                                                            bottom: 0
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            backgroundColor: "rgb(102, 102, 102)",
                                                                            height: 2,
                                                                            left: 1,
                                                                            bottom: 1,
                                                                            right: 1
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            width: 2,
                                                                            height: 6,
                                                                            left: 1,
                                                                            top: 1,
                                                                            backgroundColor: "rgb(102, 102, 102)"
                                                                        }}
                                                                    ></div>
                                                                    <div
                                                                        style={{
                                                                            width: 2,
                                                                            height: 6,
                                                                            position: "absolute",
                                                                            backgroundColor: "rgb(102, 102, 102)",
                                                                            bottom: 1,
                                                                            right: 1
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <span
                                                                id="DFA2F243-7B38-41D5-AF1A-11B0F2E7C6C0"
                                                                style={{ display: "none" }}
                                                            >
                                                                Click to toggle between metric and imperial units
                                                            </span>
                                                        </button>
                                                        <div
                                                            className="gmnoprint gm-style-cc"
                                                            draggable="false"
                                                            style={{
                                                                zIndex: 1000001,
                                                                userSelect: "none",
                                                                position: "relative",
                                                                height: 14,
                                                                lineHeight: 14
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    opacity: "0.7",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    position: "absolute"
                                                                }}
                                                            >
                                                                <div style={{ width: 1 }} />
                                                                <div
                                                                    style={{
                                                                        backgroundColor: "rgb(245, 245, 245)",
                                                                        width: "auto",
                                                                        height: "100%",
                                                                        marginLeft: 1
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "relative",
                                                                    paddingRight: 6,
                                                                    paddingLeft: 6,
                                                                    boxSizing: "border-box",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 10,
                                                                    color: "rgb(0, 0, 0)",
                                                                    whiteSpace: "nowrap",
                                                                    direction: "ltr",
                                                                    textAlign: "right",
                                                                    verticalAlign: "middle",
                                                                    display: "inline-block"
                                                                }}
                                                            >
                                                                <a
                                                                    href="https://www.google.com/intl/en-GB_US/help/terms_maps.html"
                                                                    target="_blank"
                                                                    rel="noopener"
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        cursor: "pointer",
                                                                        color: "rgb(0, 0, 0)"
                                                                    }}
                                                                >
                                                                    Terms
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            draggable="false"
                                                            className="gm-style-cc"
                                                            style={{
                                                                userSelect: "none",
                                                                position: "relative",
                                                                height: 14,
                                                                lineHeight: 14
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    opacity: "0.7",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    position: "absolute"
                                                                }}
                                                            >
                                                                <div style={{ width: 1 }} />
                                                                <div
                                                                    style={{
                                                                        backgroundColor: "rgb(245, 245, 245)",
                                                                        width: "auto",
                                                                        height: "100%",
                                                                        marginLeft: 1
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "relative",
                                                                    paddingRight: 6,
                                                                    paddingLeft: 6,
                                                                    boxSizing: "border-box",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 10,
                                                                    color: "rgb(0, 0, 0)",
                                                                    whiteSpace: "nowrap",
                                                                    direction: "ltr",
                                                                    textAlign: "right",
                                                                    verticalAlign: "middle",
                                                                    display: "inline-block"
                                                                }}
                                                            >
                                                                <a
                                                                    target="_blank"
                                                                    rel="noopener"
                                                                    title="Report errors in the road map or imagery to Google"
                                                                    dir="ltr"
                                                                    href="https://www.google.com/maps/@40.7127281,-74.0060152,13z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                                                                    style={{
                                                                        fontFamily: "Roboto, Arial, sans-serif",
                                                                        fontSize: 10,
                                                                        color: "rgb(0, 0, 0)",
                                                                        textDecoration: "none",
                                                                        position: "relative"
                                                                    }}
                                                                >
                                                                    Report a map error
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="text-right mt-4">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </DashboardBase>
    )
}

export default DashboardAddHospital;