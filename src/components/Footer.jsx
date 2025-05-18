// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1a1d29] text-white p-8 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-[18px] text-[#F5F5F5] font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-[17px] text-[#2F539B] hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[17px] text-[#2F539B] hover:underline"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* View Website In Section */}
        <div>
          <h3 className="text-[18px] text-[#F5F5F5] font-bold mb-4">
            View Website In
          </h3>
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/447/447147.png"
              alt="Language Icon"
            //   style="#2F539B"
              className="w-5 h-5 ml-2 mr-1"
            />
            <a href="#" className="text-[17px] text-[#2F539B] hover:underline">
               English
            </a>
          </div>
        </div>

        {/* Need Help? Section */}
        <div>
          <h3 className="text-[18px] text-[#F5F5F5] font-bold mb-4">
            Need Help?
          </h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-[17px] text-[#2F539B] hover:underline"
              >
                Visit Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[17px] text-[#2F539B] hover:underline"
              >
                Help Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div>
          <h3 className="text-[18px] text-[#F5F5F5] font-bold mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                alt="Social Media Icon 1"
                className="w-6 h-6 mr-2"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png"
                alt="Social Media Icon 2"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
