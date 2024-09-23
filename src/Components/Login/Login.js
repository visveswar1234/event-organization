
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./Login.css"; // Import your CSS file for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const login = () => {
        if (!validate()) return;
    
        const adminUsername = 'admin';
        const adminPassword = 'admin';
    
        if (username === adminUsername && password === adminPassword) {
            toast.success('Admin login successful');
            sessionStorage.setItem('isLoggedIn', true);
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', 'admin');
            navigate('/');
            return;
        }
    
        fetch("http://localhost:8080/user/" + username)
            .then((res) => res.json())
            .then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please enter a valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Login successful');
                        sessionStorage.setItem('isLoggedIn', true); // Set login status in sessionStorage
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userrole', resp.role);
                        navigate('/');
                    } else {
                        toast.error('Incorrect password');
                    }
                }
            })
            .catch((err) => {
                toast.error('Login failed due to: ' + err.message);
            });
    };

    // const adminLogin = () => {
        // const adminUsername = 'admin';
        // const adminPassword = 'admin';

        // if (username !== adminUsername || password !== adminPassword) {
        //     toast.error('Invalid admin credentials');
        //     return;
        // }

        // toast.success('Admin login successful');
        // sessionStorage.setItem('isLoggedIn', true);
        // sessionStorage.setItem('username', username);
        // sessionStorage.setItem('userrole', 'admin');
        // navigate('/');
    // };

    const validate = () => {
        if (username.trim() === '') {
            toast.warning('Please enter a username');
            return false;
        }
        if (password.trim() === '') {
            toast.warning('Please enter a password');
            return false;
        }
        return true;
    };

return (
    <div className="login-container">
        <ToastContainer /> {/* Include ToastContainer component */}
        <div className="login-card">
            <div className="login-header">
                <h2>User Login</h2>
            </div>
            <div className="login-body">
                <div className="form-group">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password <span className="errmsg">*</span></label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="login-footer">
                <button type="button" onClick={login} className="btn btn-primary">Login</button>
                <span> | </span>
                {/* <button type="button" onClick={login} className="btn btn-primary">Admin Login</button>
                <span> | </span> */}
                <Link className="btn btn-success" to={'/register'}>New User</Link>
            </div>
        </div>
    </div>
);
}

export default Login;