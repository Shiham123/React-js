import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa6';
import './css/reactIcon.css';

function IconReact() {
  return (
    <div>
      <h1>Welcome to react Icon</h1>
      <span>
        <FaFacebook className="icon" />
        <FaYoutube className="icon" />
        <FaTwitter className="icon" />
      </span>
    </div>
  );
}

export default IconReact;
