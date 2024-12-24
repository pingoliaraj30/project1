import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup successful!");
    navigate("/"); // Redirect to login
  };

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="signup border border-1 w-25 m-auto mb-4 pb-5" style={{ borderRadius: '5px' }}>
        <h2 className="alert alert-dark text-center" style={{ fontVariant: "small-caps", letterSpacing: "5px" }}>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="username" className="ms-3 mt-3">Username:</label>
            <input type="text" placeholder="Username" name="username" className="form-control m-auto mb-4" style={{ width: "98%" }}
              value={formData.username} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="password" className="ms-3">Password:</label>
            <input type="password" placeholder="password" name="password" className="form-control m-auto" style={{ width: "98%" }}
              value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className="w-50 m-auto mb-0 pb-0">
            <button className="btn btn-sm btn-dark mt-5 w-50 d-flex m-auto justify-content-center" type="submit">Signup</button>
          </div>
        </form>
        <p className="mt-2 mx-2 d-flex m-auto justify-content-center">
          Don't have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
