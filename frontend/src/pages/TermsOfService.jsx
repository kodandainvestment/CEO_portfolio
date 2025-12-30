import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../commonComponent/Navbar.jsx';
import Footer from '../commonComponent/Footer.jsx';

function TermsOfService() {
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
                        Terms of <span className='text-orange-700'>Service</span>
                    </h1>
                    <p className='text-gray-400 text-base sm:text-lg'>
                        Last updated: January 2025
                    </p>
                </div>

                <div className='space-y-8'>
                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Services Provided</h2>
                        <p className='text-gray-300 leading-relaxed mb-4'>
                            Kodanda Investments Private Limited, under the leadership of CEO Chahat Tiwari, provides the following services:
                        </p>
                        <ul className='text-gray-300 space-y-2 ml-6'>
                            <li>• Financial Advisory Services</li>
                            <li>• Financial Analysis and Reporting</li>
                            <li>• Investment Strategy Consultation</li>
                            <li>• Business Analysis</li>
                            <li>• Financial Accounting Services</li>
                            <li>• Budgeting and Financial Planning</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Investment Disclaimer</h2>
                        <p className='text-gray-300 leading-relaxed mb-4'>
                            All investment advice and strategies are provided for informational purposes. Past performance does not guarantee future results. All investments carry risk of loss, and you should carefully consider your financial situation before making investment decisions.
                        </p>
                        <div className='bg-orange-700/20 border border-orange-700/30 rounded-lg p-4'>
                            <p className='text-orange-300 font-medium'>
                                Important: Please consult with qualified financial professionals before making investment decisions.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Professional Standards</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            Our services are provided in accordance with professional standards and regulatory requirements. Chahat Tiwari brings expertise from IIM Indore education and practical experience in financial markets and investment strategies.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Limitation of Liability</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            Kodanda Investments Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or information provided.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-bold text-orange-500 mb-4'>Contact for Terms</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            For questions regarding these terms, please contact:
                        </p>
                        <div className='mt-4 p-4 bg-gray-900 rounded-lg'>
                            <p className='text-white'>Chahat Tiwari, CEO</p>
                            <p className='text-white'>Email: kodandainvestments@gmail.com</p>
                            <p className='text-white'>Phone: +91 74839 46281</p>
                            <p className='text-white'>Location: Indore, Madhya Pradesh, 452001</p>
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

export default TermsOfService