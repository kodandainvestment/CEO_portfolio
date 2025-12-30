import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3 sm:mb-4">
              C<span className="text-white">EO</span>
            </h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming enterprises through strategic leadership, innovative thinking, and a relentless pursuit of excellence. Ready to drive your organization's next breakthrough.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.linkedin.com/in/chahat-tiwari-2619a6252/" className="bg-orange-700 bg-opacity-20 text-orange-700 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center hover:bg-orange-700 hover:text-black transition-all duration-300">
                <FaLinkedin className="text-sm sm:text-base" />
              </a>
              <a href="#" className="bg-orange-700 bg-opacity-20 text-orange-700 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center hover:bg-orange-700 hover:text-black transition-all duration-300">
                <FaTwitter className="text-sm sm:text-base" />
              </a>
              <a href="mailto:kodandainvestments@gmail.com" className="bg-orange-700 bg-opacity-20 text-orange-700 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center hover:bg-orange-700 hover:text-black transition-all duration-300">
                <FaEnvelope className="text-sm sm:text-base" />
              </a>
              <a href="tel:+91 74839 46281" className="bg-orange-700 bg-opacity-20 text-orange-700 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center hover:bg-orange-700 hover:text-black transition-all duration-300">
                <FaPhone className="text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('expertise')} className="text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Expertise
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('achievement')} className="text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base">
                  Achievements
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <div className="space-y-3">
              <div className="text-gray-400">
                <div className="text-xs sm:text-sm">Email</div>
                <div className="text-white text-xs sm:text-sm break-all">kodandainvestments@gmail.com</div>
              </div>
              <div className="text-gray-400">
                <div className="text-xs sm:text-sm">Phone</div>
                <div className="text-white text-xs sm:text-sm">+91 74839 46281</div>
              </div>
              <div className="text-gray-400">
                <div className="text-xs sm:text-sm">Location</div>
                <div className="text-white text-xs sm:text-sm">Indore, Madhya Pradesh, 452001</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 CEO Portfolio. All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}