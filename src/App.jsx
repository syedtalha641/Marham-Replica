import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <br/>
      <div className='ccontent p-4 m-4 bg-light rounded-2'>
        <h4>Add Hospital</h4>
      </div>
    </>
  )
}

export default App
