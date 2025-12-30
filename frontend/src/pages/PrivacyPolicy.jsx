import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../commonComponent/Navbar.jsx';
import Footer from '../commonComponent/Footer.jsx';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <div className='bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto max-w-4xl'>
                <div className='text-center mb-8 sm:mb-12'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
                        Privacy <span className='text-orange-700'>Policy</span>
                    </h1>
                    <p className='text-gray-400 text-base sm:text-lg'>
                        Last updated: January 2025
                    </p>
                </div>

                <div className='space-y-8'>
                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Information We Collect</h2>
                        <p className='text-gray-300 leading-relaxed mb-4'>
                            At Kodanda Investments Private Limited, we collect information you provide directly to us, such as when you contact us through our website, request information about our investment services, or engage with our financial advisory services.
                        </p>
                        <ul className='text-gray-300 space-y-2 ml-6'>
                            <li>• Contact information (name, email, phone number)</li>
                            <li>• Professional information relevant to investment discussions</li>
                            <li>• Communication preferences</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>How We Use Your Information</h2>
                        <p className='text-gray-300 leading-relaxed mb-4'>
                            We use the information we collect to:
                        </p>
                        <ul className='text-gray-300 space-y-2 ml-6'>
                            <li>• Provide financial advisory and investment services</li>
                            <li>• Respond to your inquiries and requests</li>
                            <li>• Send you relevant information about our services</li>
                            <li>• Comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Information Security</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All financial information is handled in accordance with industry standards and regulatory requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Contact Information</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className='mt-4 p-4 bg-gray-900 rounded-lg'>
                            <p className='text-white'>Email: kodandainvestments@gmail.com</p>
                            <p className='text-white'>Phone: +91 74839 46281</p>
                            <p className='text-white'>Address: Indore, Madhya Pradesh, 452001</p>
                        </div>
                    </section>
                </div>

                {/* <div className='text-center mt-12'>
                    <Link to="/">
                        <button className='bg-orange-700 hover:bg-orange-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors'>
                            Back to Home
                        </button>
                    </Link>
                </div> */}
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy