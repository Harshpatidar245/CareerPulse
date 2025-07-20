// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//     role: '',
//     companyName: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long');
//       setLoading(false);
//       return;
//     }

//     if (formData.role === 'job_poster' && !formData.companyName) {
//       setError('Company name is required for job posters');
//       setLoading(false);
//       return;
//     }

//     const result = await register(formData);

//     if (result.success) {
//       setSuccess('Registration successful! Redirecting...');
//       setTimeout(() => {
//         if (result.user.role === 'job_seeker') {
//           navigate('/preferences');
//         } else {
//           navigate('/dashboard');
//         }
//       }, 1500);
//     } else {
//       setError(result.error || 'Registration failed');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <div className="auth-logo">
//             <div className="logo-icon">📝</div>
//             <h1>Join JobPortal</h1>
//             <p>Create your free account</p>
//           </div>
//         </div>

//         <div className="auth-body">
//           {error && (
//             <div className="alert alert-error">
//               <span className="alert-icon">⚠️</span>
//               {error}
//             </div>
//           )}

//           {success && (
//             <div className="alert alert-success">
//               <span className="alert-icon">✅</span>
//               {success}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="auth-form">

//             <div className="form-group">
//               <label htmlFor="name" className="form-label">
//                 <span className="label-icon">👤</span>
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 <span className="label-icon">📧</span>
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-control"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone" className="form-label">
//                 <span className="label-icon">📱</span>
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 className="form-control"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="role" className="form-label">
//                 <span className="label-icon">🎯</span>
//                 I am a
//               </label>
//               <select
//                 id="role"
//                 name="role"
//                 className="form-control form-select"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select your role</option>
//                 <option value="job_seeker">Job Seeker</option>
//                 <option value="job_poster">Job Poster</option>
//               </select>
//             </div>

//             {formData.role === 'job_poster' && (
//               <div className="form-group">
//                 <label htmlFor="companyName" className="form-label">
//                   <span className="label-icon">🏢</span>
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   name="companyName"
//                   className="form-control"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}

//             <div className="form-group">
//               <label htmlFor="password" className="form-label">
//                 <span className="label-icon">🔒</span>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="form-control"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword" className="form-label">
//                 <span className="label-icon">🔒</span>
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 className="form-control"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary btn-auth"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="loading-spinner">
//                   <span className="spinner"></span>
//                   Creating...
//                 </span>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="auth-footer">
//             <p>
//               Already have an account?{" "}
//               <Link to="/login" className="auth-link">
//                 Login here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
    companyName: '',
    otp: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const { register } = useAuth();
  const navigate = useNavigate();

  // Timer countdown for OTP resend
  useEffect(() => {
    let interval = null;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((timer) => timer - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setFormData({ ...formData, otp: value });
    }
  };

  const handleSendEmailOtp = async () => {
    const email = formData.email.trim().toLowerCase();
    if (!email) {
      setError('Please enter your email first.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setOtpLoading(true);
      setError('');
      setSuccess('');

      const response = await axios.post('/auth/send-email-otp', { email });

      if (response.data.success) {
        setOtpSent(true);
        setOtpTimer(60);
        setSuccess('OTP sent to your email successfully!');
      }
    } catch (err) {
      console.error('Send OTP error:', err);
      const errorMessage = err.response?.data?.message || 'Failed to send OTP.';
      setError(errorMessage);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    const email = formData.email.trim().toLowerCase();
    const otp = formData.otp.trim();

    if (!email || !otp) {
      setError('Email and OTP are required.');
      return;
    }

    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setError('OTP must be exactly 6 digits.');
      return;
    }

    try {
      setOtpLoading(true);
      setError('');

      const response = await axios.post('/auth/verify-registration-otp', { email, otp });

      if (response.data.success) {
        setOtpVerified(true);
        setSuccess('Email verified successfully! You can now complete your registration.');
        setOtpSent(false);
        setFormData({ ...formData, otp: '' });
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      const errorMessage = err.response?.data?.message || 'OTP verification failed.';
      setError(errorMessage);
    } finally {
      setOtpLoading(false);
    }
  };

  const resendOtp = () => {
    handleSendEmailOtp();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Check if email is verified
    if (!otpVerified) {
      setError('Please verify your email address first');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (formData.role === 'job_poster' && !formData.companyName) {
      setError('Company name is required for job posters');
      setLoading(false);
      return;
    }

    const result = await register(formData);

    if (result.success) {
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => {
        if (result.user.role === 'job_seeker') {
          navigate('/preferences');
        } else {
          navigate('/dashboard');
        }
      }, 1500);
    } else {
      setError(result.error || 'Registration failed');
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-icon">📝</div>
            <h1>Join JobPortal</h1>
            <p>Create your free account</p>
          </div>
        </div>

        <div className="auth-body">
          {error && (
            <div className="alert alert-error">
              <span className="alert-icon">⚠️</span>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <span className="alert-icon">✅</span>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="label-icon">👤</span>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="label-icon">📧</span>
                Email Address
                {otpVerified && <span className="verified-badge">✅ Verified</span>}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                disabled={otpVerified}
                required
              />
            </div>

            {/* Email OTP Verification Section */}
            {!otpVerified && (
              <div className="otp-verification-section">
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">🔐</span>
                    Email Verification
                  </label>
                  
                  {!otpSent ? (
                    <button
                      type="button"
                      className="btn btn-outline btn-verify-email"
                      onClick={handleSendEmailOtp}
                      disabled={otpLoading || !formData.email}
                    >
                      {otpLoading ? (
                        <span className="loading-spinner">
                          <span className="spinner" style={{ width: '16px', height: '16px' }}></span>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <span className="btn-icon">📧</span>
                          Send Verification Code
                        </>
                      )}
                    </button>
                  ) : (
                    <div className="otp-input-section">
                      <div className="otp-input-group">
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          className="form-control otp-input"
                          value={formData.otp}
                          onChange={handleOtpChange}
                          placeholder="000000"
                          maxLength="6"
                          disabled={otpLoading}
                        />
                        <button
                          type="button"
                          className="otp-verify-btn"
                          onClick={handleVerifyEmailOtp}
                          disabled={otpLoading || formData.otp.length !== 6}
                        >
                          {otpLoading ? (
                            <span className="spinner" style={{ width: '16px', height: '16px' }}></span>
                          ) : (
                            "Verify"
                          )}
                        </button>
                      </div>
                      
                      {otpTimer === 0 && (
                        <div className="resend-section">
                          <p className="resend-text">Didn't receive the code?</p>
                          <button
                            type="button"
                            className="resend-btn"
                            onClick={resendOtp}
                            disabled={otpLoading}
                          >
                            {otpLoading ? "Sending..." : "Resend OTP"}
                          </button>
                        </div>
                      )}
                      
                      {otpTimer > 0 && (
                        <p className="timer-text">Resend available in {otpTimer}s</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Rest of the form - disabled if email not verified */}
            <div className={`form-section ${!otpVerified ? 'form-disabled' : ''}`}>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <span className="label-icon">📱</span>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!otpVerified}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  <span className="label-icon">🎯</span>
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  className="form-control form-select"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={!otpVerified}
                  required
                >
                  <option value="">Select your role</option>
                  <option value="job_seeker">Job Seeker</option>
                  <option value="job_poster">Job Poster</option>
                </select>
              </div>

              {formData.role === 'job_poster' && (
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    <span className="label-icon">🏢</span>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-control"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={!otpVerified}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!otpVerified}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  <span className="label-icon">🔒</span>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={!otpVerified}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-auth"
                disabled={loading || !otpVerified}
              >
                {loading ? (
                  <span className="loading-spinner">
                    <span className="spinner"></span>
                    Creating...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;