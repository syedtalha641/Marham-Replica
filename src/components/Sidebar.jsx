import {FaBars} from 'react-icons/fa'

const Sidebar = props => {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <div> I slide into view </div>
        <div> Me Too! </div>
        <div> Me Three! </div>
        <div onClick={props.toggleSidebar} className="sidebar-toggle">
            <FaBars/>
        </div>
      </div>
    );
  };
  export default Sidebar;