import Navbar1 from "../components/Navbar1";
// import '../assets/flowbite.min.css'
import '../assets/app.css'
const Landing = props => {
    return (
        <>
            <Navbar1 isSignedIn={true}/>
            <div className="main_content overflow-hidden">                
                <div className="site-hero w-full relative">
                    <img
                        className="w-full object-cover bg-cover msm:block"
                        src="./hero.png"
                        alt=""
                    />
                    <div className="btn-appointment mx-0  mt-3  absolute xxsm:relative xsm:relative sm:absolute">
                        <a
                            className="btn btn-link text-center mt-0 rounded-none bg-primary text-white font-normal font-fira-sans text-sm py-3.5 px-7"
                            target="_blank"
                            href="#"
                            role="button"
                        >
                            Make Appointment
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Landing;