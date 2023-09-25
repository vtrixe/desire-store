import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Information */}
          <div className="text-center md:text-left md:ml-4 mt-4 md:mt-0 p-4 ">
            {/* Add margin to move it right */}
            <h2 className="text-lg font-bold text-gray-200 mb-3 font-serif">Contact Information</h2>
            <p className="text-sm text-gray-300">
              &copy; Desire Supplements<br />
              103 Lajpat Nagar, Pakhowal Road, Ludhiana (141001), Punjab, India<br />
              <a href="tel:+91 8196825557" className="text-blue-500">+91 8196825557</a><br />
              <a href="mailto:desire.supplement99@gmail.com" className="text-blue-500">desire.supplement99@gmail.com</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-200 mb-3 font-serif">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/desire_supplement_/" className="text-blue-500 hover:underline">Instagram</a>
              {/* Add more social media links here */}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-200 mb-3 font-serif">Subscribe to Our Newsletter</h2>
            <p className="text-sm text-gray-300">Stay updated with our latest offers and products. Enter your email below:</p>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md py-2 px-3 w-full text-gray-800"
              />
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 mt-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-6 text-xs text-gray-300">
          &copy; {new Date().getFullYear()} Desire Supplements. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
