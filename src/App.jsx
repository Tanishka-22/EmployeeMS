import './App.css';
import React from 'react';
import Login from './components/auth/login';
import { Admin } from './components/dashboards/Admin';
import { Employee } from './components/dashboards/Employee';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, useAuth } from './components/context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
    const { user, role, loading } = useAuth();

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            {!user ? (
                <Login />
            ) : (
                role === 'admin' ? <Admin /> : <Employee />
            )}
        </>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <ToastContainer />
            <AppContent />
        </AuthProvider>
    );
};

export default App;