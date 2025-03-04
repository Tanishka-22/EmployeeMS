import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const { handleLogin, userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            try {
                await handleLogin(email, password);
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="loginPage h-screen v-screen flex justify-center items-center">
            <div className="loginForm p-3 rounded w-25 border">
                <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <div className='loginHead'><h1>Login Page</h1></div>
                    <div className='flex flex-col p-2 loginLabels'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            required 
                            className='rounded-2 p-1 mt-1 text-black'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col p-2 loginLabels'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            required 
                            className='rounded-0 p-1 mt-1 text-black'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        className='p-1 btn btn-success w-100 rounded-0' 
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;