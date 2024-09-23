import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css"; // Import your CSS file for styling

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const register = () => {
        if (!validate()) return;

        // Prepare data for registration
        const userData = {
            username: username,
            password: password,
            name: name,
            email: email,
            gender: gender
        };

        // Perform registration by sending data to the server
        fetch("http://localhost:8080/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful registration
            toast.success('Registration successful');
            navigate('/login'); // Redirect to login page after successful registration
        })
        .catch(error => {
            // Handle registration error
            toast.error('Registration failed due to: ' + error.message);
        });
    };

    const validate = () => {
        if (username.trim() === '') {
            toast.warning('Please enter a username');
            return false;
        }
        if (password.trim() === '') {
            toast.warning('Please enter a password');
            return false;
        }
        if (password !== confirmPassword) {
            toast.warning('Passwords do not match');
            return false;
        }
        // Add additional validation logic for other fields if needed
        return true;
    };

    return (
        <div className="register-container">
            <ToastContainer />
            <div className="register-card">
                <div className="register-header">
                    <h2>User Registration</h2>
                </div>
                <div className="register-body">
                    <div className="form-group">
                        <label>User Name <span className="errmsg">*</span></label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password <span className="errmsg">*</span></label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <br />
                        <input type="radio" checked={gender === 'male'} onChange={() => setGender('male')} name="gender" value="male" className="app-check" />
                        <label>Male</label>
                        <input type="radio" checked={gender === 'female'} onChange={() => setGender('female')} name="gender" value="female" className="app-check" />
                        <label>Female</label>
                    </div>
                </div>
                <div className="register-footer">
                    <button type="button" onClick={register} className="btn btn-primary">Register</button>
                    <span> | </span>
                    <Link className="btn btn-success" to={'/login'}>Back to Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
