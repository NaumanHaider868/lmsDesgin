import Login from './Pages/Login'
import Content from './Pages/Content';
import DashBoard from './Pages/DashBoard';
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/Sidebar'
import { useState } from 'react';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='wrapper'>
      {/* <Login/>  */}
      <Sidebar isOpen={isSidebarOpen} />
      <Navbar handleIconClick={handleIconClick}/>
       {/* <Content /> */}
      <DashBoard/>
    </div>
  );
}

export default App;
