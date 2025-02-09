import React, { useState } from 'react';

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);

        setEmail("");
        setPassword("");
        setRememberMe(false);
    };

    return (
        <div className="loginPage h-screen v-screen flex justify-center items-center">
            <div className="loginForm p-3 rounded w-25 border">
                <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <div className='loginHead'><h1 className=''>Login Page</h1></div>
                    <div className='flex flex-col p-2 loginLabels'>
                        <label className='' htmlFor="email">Email:</label>
                        <input required className='rounded-2 p-1 mt-1 text-black'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col p-2 loginLabels'>
                        <label htmlFor="password">Password:</label>
                        <input required className='rounded-0 p-1 mt-1 text-black'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='p-2'>
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                        Remember Me
                        </label>
                    </div>
                    <div className='pb-4'>
                        <a className='forgot' href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button className='p-1 btn btn-success w-100 rounded-0' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;