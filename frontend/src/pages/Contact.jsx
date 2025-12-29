import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailLock } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbLocationCheck } from "react-icons/tb";


function Contact() {

  const detail = [
    {
      icon: <MdOutlineMailLock />,
      label: "Email",
      name: "kodanda@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Contact",
      name: "111-222-3333"
    },
    {
      icon: <IoLocationOutline />,
      label: "Location",
      name: "Unity one Mall, Rajeev Gandhi Square, Indore"
    },
  ]

    return (
        <div className='min-h-screen bg-black py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h1 className='text-white text-5xl font-bold mb-4'>Get i<span className='text-orange-700'>n Touch</span></h1>
                    <p className='text-gray-400 text-lg'>Interested in strategic consultation, speaking engagements, or board positions? I'd love to hear from you.</p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Details */}
                    <div className='space-y-8'>
                        <div>
                            <h2 className='text-white text-2xl font-semibold mb-6'>Contact Information</h2>
                            <div className='space-y-6'>
                                {detail.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div className='bg-orange-700 bg-opacity-20 text-orange-700 text-xl w-12 h-12 flex items-center justify-center rounded-lg'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className='text-gray-400 text-sm'>{item.label}</p>
                                            <p className='text-white text-lg'>{item.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className=' p-8 rounded-lg'>
                        {/* <h2 className='text-white text-2xl font-semibold mb-6'>Send Message</h2> */}
                        <form className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <input type='text' placeholder='First Name' className='bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700' />
                                <input type='text' placeholder='Last Name' className='bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700' />
                            </div>
                            <input type='email' placeholder='Email Address' className='w-full bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700' />
                            <input type='text' placeholder='Subject' className='w-full bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700' />
                            <textarea placeholder='Your Message' rows='5' className='w-full bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 resize-none'></textarea>
                            <button type='submit' className='bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2'>
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