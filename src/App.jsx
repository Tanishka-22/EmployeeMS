import './App.css'
import Login from './components/auth/login'

import { Admin } from './components/dashboards/Admin';

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    return(
      <div>
      <Login/> 
      <Admin/>
      </div>
    )
}

export default App;

