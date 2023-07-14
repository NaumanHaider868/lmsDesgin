import Login from './Pages/Login'
import Content from './Pages/Content';
import DashBoard from './Pages/DashBoard';
import Form from './Pages/Form';
import { Route, Routes } from 'react-router-dom'
import CoursesList from './Pages/CoursesList';
function App() {

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/form' element={<Form />} />
        <Route path='/coursesList' element={<CoursesList/>} />
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
