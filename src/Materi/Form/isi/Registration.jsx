import React, { useState } from 'react';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',  
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        alert(`Registration Successful! Welcome, ${formData.username}!`);
        console.log('Submitted Data:', formData);
        }
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.username) {
            formIsValid = false;
            errors['username'] = 'Username cannot be empty';
        }

        if (!formData.email) {
            formIsValid = false;
            errors['email'] = 'Email cannot be empty';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors['email'] = 'Email is not valid';
        }

        if (!formData.password) {
            formIsValid = false;
            errors['password'] = 'Password cannot be empty';
            } else if (formData.password !== formData.confirmPassword) {
            formIsValid = false;
            errors['confirmPassword'] = 'Passwords do not match';
        }

        setErrors(errors);
        return formIsValid;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="column">
                <label>First Name:</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className={errors.firstName ? 'input-error' : ''} 
                    />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>

            <div className="column">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className={errors.lastName ? 'input-error' : ''} 
                    />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>
            
            <div>
                <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        className={errors.username ? 'input-error' : ''} 
                    />
                {errors.username && <p className="error-message">{errors.username}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={errors.email ? 'input-error' : ''} 
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className={errors.password ? 'input-error' : ''} 
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    className={errors.confirmPassword ? 'input-error' : ''} 
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
}

export default Registration;
