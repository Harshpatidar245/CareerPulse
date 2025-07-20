import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          JobPortal
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              >
                Dashboard
              </Link>
              
              {user.role === 'job_poster' && (
                <>
                  <Link
                    to="/create-job"
                    className={`nav-link ${isActive('/create-job') ? 'active' : ''}`}
                  >
                    Create Job
                  </Link>
                  <Link
                    to="/job-management"
                    className={`nav-link ${isActive('/job-management') ? 'active' : ''}`}
                  >
                    Manage Jobs
                  </Link>
                  <Link
                    to="/manage-applications"
                    className={`nav-link ${isActive('/manage-applications') ? 'active' : ''}`}
                  >
                    Applications
                  </Link>
                </>
              )}
              
              {user.role === 'job_seeker' && (
                <>
                  <Link
                    to="/browse-jobs"
                    className={`nav-link ${isActive('/browse-jobs') ? 'active' : ''}`}
                  >
                    Browse Jobs
                  </Link>
                  <Link
                    to="/preferences"
                    className={`nav-link ${isActive('/preferences') ? 'active' : ''}`}
                  >
                    Preferences
                  </Link>
                  <Link
                    to="/activity"
                    className={`nav-link ${isActive('/activity') ? 'active' : ''}`}
                  >
                    Activity
                  </Link>
                </>
              )}
              
              <Link
                to="/profile"
                className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
              >
                <div className="nav-profile">
                  {user.profilePhoto ? (
                    <img
                      src={user.profilePhoto.startsWith('http') ? user.profilePhoto : `${import.meta.env.VITE_API_BASE_URL}${user.profilePhoto}`}
                      alt="Profile"
                      className="nav-avatar"
                    />
                  ) : (
                    <div className="nav-avatar-placeholder">
                      {user.name?.charAt(0)?.toUpperCase() || '?'}
                    </div>
                  )}
                  <span className="nav-username">{user.name}</span>
                </div>
              </Link>
              
              <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            // Desktop Auth Buttons - Only show on desktop
            <div className="auth-buttons">
              <Link to="/login" className="btn-login">
                Login
              </Link>
              <Link to="/register" className="btn-register">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-dropdown">
            {user ? (
              <>
                <Link to="/dashboard" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                  Dashboard
                </Link>
                {user.role === 'job_poster' && (
                  <>
                    <Link to="/create-job" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Create Job
                    </Link>
                    <Link to="/job-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Manage Jobs
                    </Link>
                    <Link to="/manage-applications" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Applications
                    </Link>
                  </>
                )}
                {user.role === 'job_seeker' && (
                  <>
                    <Link to="/browse-jobs" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Browse Jobs
                    </Link>
                    <Link to="/preferences" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Preferences
                    </Link>
                    <Link to="/activity" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                      Activity
                    </Link>
                  </>
                )}
                <Link to="/profile" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                  Profile
                </Link>
                <button className="mobile-dropdown-link" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                  Login
                </Link>
                <Link to="/register" className="mobile-dropdown-link register" onClick={closeMobileMenu}>
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;