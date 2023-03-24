import React, { useId } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const emailId = useId();
  console.log('@@@ emailId', emailId);
  
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <div className="flex items-start mb-2">
          <FaEnvelope className="text-gray-600 mr-2 mt-1" />
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
        </div>
        <div className="flex items-start mb-2">
          <FaPhone className="text-gray-600 mr-2 mt-1" />
          <a href="tel:+1234567890" className="text-blue-500">
            +1 (234) 567-890
          </a>
        </div>
        <div className="flex items-start mb-2">
          <FaMapMarkerAlt className="text-gray-600 mr-2 mt-1" />
          <p className="text-gray-700">
            123 Main St.
            <br />
            Anytown, USA 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
