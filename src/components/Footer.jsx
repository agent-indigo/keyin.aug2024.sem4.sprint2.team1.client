import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#040200] text-[#D8D7D7] p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2 text-md">
          <div className="flex space-x-12 pl-8">
            <ul className="list-none space-y-1">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
            <ul className="list-none space-y-1">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Policy</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 pr-8">
          <a href="https://www.facebook.com" className="hover:no-underline text-[#D8D7D7]" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" className="hover:no-underline text-[#D8D7D7]" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com" className="hover:no-underline text-[#D8D7D7]" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
          </a>
          <a href="https://www.tiktok.com" className="hover:no-underline text-[#D8D7D7]" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

