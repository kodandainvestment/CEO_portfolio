import { FaPhone, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbLocationCheck } from "react-icons/tb";


function Contact() {

  const detail = [
    {
      icon: <MdOutlineMailLock />,
      label: "Email",
      name: "kodandainvestments@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Contact",
      name: "+91 74839 46281"
    },
    {
      icon: <IoLocationOutline />,
      label: "Location",
      name: "Indore, Madhya Pradesh, 452001"
    },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaGithub />, name: "GitHub", url: "#" },
    { icon: <FaGlobe />, name: "Website", url: "#" },
  ]

    return (
        <div className='bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto'>
                <div className='text-center mb-8 sm:mb-12'>
                    <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>Get i<span className='text-orange-700'>n Touch</span></h1>
                    <p className='text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>Interested in investment opportunities, financial consultation, or business partnerships? Let's connect and explore possibilities.</p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
                    {/* Contact Details */}
                    <div className='bg-gray-950 p-6 sm:p-8 rounded-lg border border-gray-800 flex items-center justify-center'>
                        <div className='space-y-12 w-full'>
                            {detail.map((item, index) => (
                                <div key={index} className='flex items-center space-x-6'>
                                    <div className='bg-gradient-to-br from-orange-700 to-orange-500 text-white text-xl w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg flex-shrink-0'>
                                        {item.icon}
                                    </div>
                                    <div className='min-w-0 flex-1'>
                                        <p className='text-orange-500 text-lg font-semibold mb-2'>{item.label}</p>
                                        <p className='text-white text-xl font-medium break-words leading-relaxed'>{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-gray-950 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800'>
                        <form className='space-y-4 sm:space-y-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                                <input type='text' placeholder='First Name' className='bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 text-sm sm:text-base' />
                                <input type='text' placeholder='Last Name' className='bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 text-sm sm:text-base' />
                            </div>
                            <input type='email' placeholder='Email Address' className='w-full bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 text-sm sm:text-base' />
                            <input type='text' placeholder='Subject' className='w-full bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 text-sm sm:text-base' />
                            <textarea placeholder='Your Message' rows='4' className='w-full bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 resize-none text-sm sm:text-base'></textarea>
                            <button type='submit' className='bg-orange-700 hover:bg-orange-800 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base'>
                                Send Message <TbLocationCheck />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact