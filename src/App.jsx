import './App.css'
import Login from './components/auth/login'
import AdminDashboard from './components/dashboards/admin_dashboard'
import { Tasks } from './components/pages/Tasks';
import { ManageEmployees } from './components/pages/Employees';
import { Department } from './components/pages/Department';
import EmployeeDashboard from './components/dashboards/employee_dashboard';
import { EmpProfile } from './components/pages/EmpProfile';

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    return(
      <div>
      <Login/> 
      {/* <AdminDashboard/> 
      <Tasks/>
      <ManageEmployees/>
      <Department/> */}
      <EmployeeDashboard/>
      <EmpProfile/>
      <ToastContainer/>
      </div>
    )
}

export default App;
