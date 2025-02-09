import './App.css'
import React, { useContext, useState } from 'react'
import Login from './components/auth/login'

import { Admin } from './components/dashboards/Admin';
import { Employee } from './components/dashboards/Employee';

import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './components/context/AuthProvider';

const App = () => {
    const [user, setUser] = useState(null);
    const handleLogin = (email,password) => {
      if (email === "admin@gmail.com" && password === "admin") {
        setUser('admin');
        console.log("Admin");
      } else if(email === "user@gmail.com" && password === "user") {
        setUser('employee');
      } else {
        toast.error("Invalid Credentials");
      }
    }
    
    const data = useContext(AuthContext);

    return(
      <div>
      {!user ? (<Login handleLogin={handleLogin} />) : (user === 'admin' ? <Admin /> : <Employee />)}      
      </div>
    )
}

export default App;

