import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-3" style={{backgroundColor: "#25142d"}}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn- mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 style={{color: 'white'}}>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Jason Yoo
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
