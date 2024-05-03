
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { Toaster } from 'sonner';
import Dashbord from "./pages/Dashbord";
import TDetails from './pages/TDetails';
import Tasks from "./pages/Tasks";
import UsersT from './pages/UsersT';
import Sigin from './pages/Sigin';


function App() {

  function Layout(){
    const user = ""
    const location = useLocation()

    return user ?(
     <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
          {/** <Sidebar/> */}
      </div>
         {/** <MobileSidebar/> */}
         <div className='flex-1 overflow-y-auto'>
          {/** <navbar/> */}
          <div>
          <Outlet className="p-4 2xl:px-10"/>
          </div>
         </div>
      
     </div>
    ):(
        <Navigate to="/sign-in" state={{from:location}} replace/>
    )
  }
  
  return (
    <div className='w-full min-h-screen bg-[#f3f4f6]'>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Navigate to='/dashbord' />}/>
      <Route path='/dashbord >' element={<Dashbord />}/>
      <Route path='/tasks >' element={<Tasks/>}/>
      <Route path="/completed/:status >" element={<Tasks/>}/>
      <Route path="/in-progress/:status >" element={<Tasks/>}/>
      <Route path="/todo/:status >" element={<Tasks/>}/>
      <Route path="/team >" element={<UsersT />}/>
      <Route path="/task/:id >" element={<TDetails />}/>
    </Route>

     <Route path='/sign-in' element={<Sigin/>}/>
    </Routes>
    <Toaster richColors />
    </div>
  )
  
}

export default App
