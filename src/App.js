import Login from './Pages/Login'
import Content from './Pages/Content';
import DashBoard from './Pages/DashBoard';
import Form from './Pages/Form';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      {/* <Login/>  */}
      {/* <Sidebar isOpen={isSidebarOpen} />
      <Navbar handleIconClick={handleIconClick}/> */}
      {/* <Content /> */}
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;
