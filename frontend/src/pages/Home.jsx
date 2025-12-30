import ceoImg from '/ceo.png'
import Contact from './Contact.jsx';

function Home() {
    return (
        <div className='bg-black flex items-center pt-16 pl-4 sm:pl-6 lg:pl-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden'>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-700/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 relative z-10 items-center'>
                {/* Text Section */}
                <div className='lg:col-span-7 flex flex-col justify-center space-y-4 order-2 lg:order-1'>
                    {/* Badge */}
                    <div className='inline-flex items-center px-4 py-2 bg-orange-700/20 border border-orange-700/30 rounded-full w-fit animate-fade-in-up'>
                        <div className='w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse'></div>
                        <span className='text-orange-500 text-sm font-medium'>CEO @ Kodanda Investments</span>
                    </div>
                    
                    {/* Main Heading */}
                    <div className='space-y-2'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200'>
                            Chahat <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 animate-gradient'>Tiwari</span>
                        </h1>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up animation-delay-400'>
                            Investment Strategist
                        </h1>
                    </div>
                    
                    {/* Description */}
                    <p className='text-gray-400 text-base lg:text-lg leading-relaxed animate-fade-in-up animation-delay-600'>
                        Leading strategic investment decisions and financial market analysis at Kodanda Investments. 
                        <span className='text-orange-500 font-medium '> MBA from IIM Indore</span> with expertise in financial markets.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-3 pt-3 animate-fade-in-up animation-delay-800'>
                        <a href="#contact">
                            <button className='group relative px-6 py-3 bg-gradient-to-r from-orange-700 to-orange-600 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-700/25'>
                                <span className='relative z-10'>GET IN TOUCH</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </button>
                        </a>
                        <a href="#achievement">
                            <button className='group px-6 py-3 border-2 border-orange-700 text-orange-700 font-semibold rounded-xl hover:bg-orange-700 hover:text-black transition-all duration-300 hover:scale-105'>
                                VIEW MY WORK
                            </button>
                        </a>
                    </div>
                    
                    {/* Stats */}
                    <div className='flex flex-wrap gap-6 pt-4 border-t border-gray-800 animate-fade-in-up animation-delay-1000'>
                        <div className='text-center group cursor-pointer'>
                            <div className='text-xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300'>5+</div>
                            <div className='text-gray-500 text-xs'>Months as CEO</div>
                        </div>
                        <div className='text-center group cursor-pointer'>
                            <div className='text-xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300'>IIM</div>
                            <div className='text-gray-500 text-xs'>Indore Graduate</div>
                        </div>
                        <div className='text-center group cursor-pointer'>
                            <div className='text-xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300'>Finance</div>
                            <div className='text-gray-500 text-xs'>Specialization</div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='lg:col-span-5 flex items-center justify-center order-1 lg:order-2'>
                    <div className='relative group'>
                        {/* Main Image */}
                        <div className='relative w-80 h-96 lg:w-96 lg:h-[500px] animate-fade-in-up animation-delay-300'>
                            <img 
                                src={ceoImg} 
                                alt="Chahat Tiwari - CEO Portrait" 
                                className='w-full h-full object-cover object-top rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500' 
                            />
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl'></div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className='absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-700 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl animate-bounce'>
                            CEO
                        </div>
                        
                        {/* Background Decoration */}
                        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-orange-700/20 to-transparent rounded-full blur-xl animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home