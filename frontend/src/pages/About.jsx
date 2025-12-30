import ceoImg from '/ceo.png'
import { IoMdArrowForward } from "react-icons/io";
import { CgAwards } from "react-icons/cg";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbCalendarEvent } from "react-icons/tb";

function About() {
    const block = [
        {
            icon: <CgAwards />,
            numbers: "5+",
            name: "Months as CEO",
        },
        {
            icon: <PiBuildingApartmentFill />,
            numbers: "1",
            name: "Company Led",
        },
        {
            icon: <TbCalendarEvent />,
            numbers: "IIM",
            name: "Graduate",
        },
    ]
    
    return (
        <div className='bg-black flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-700/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10'>
                {/* Image & Stats Section */}
                <div className='lg:col-span-5 space-y-8'>
                    {/* Image Container */}
                    <div className='relative group'>
                        <div className='relative w-full max-w-md mx-auto'>
                            <img
                                src={ceoImg}
                                alt="Chahat Tiwari - CEO Portrait"
                                className='w-full h-96 lg:h-[480px] object-cover object-top rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500'
                            />
                            {/* Professional Badge */}
                            {/* <div className='absolute top-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-700/30'> */}
                                {/* <span className='text-orange-500 text-sm font-medium'>chief executive officer</span> */}
                            {/* </div> */}
                        </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className='grid grid-cols-3 gap-4'>
                        {block.map((item, index) => (
                            <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-orange-700/50 transition-all duration-300 text-center">
                                <div className="text-orange-500 text-3xl mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-white text-2xl font-bold mb-1">{item.numbers}</div>
                                <div className="text-gray-400 text-sm">{item.name}</div>
                                
                                {/* Hover Effect */}
                                <div className='absolute inset-0 bg-orange-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className='lg:col-span-7 flex flex-col justify-center space-y-8'>
                    {/* Header */}
                    <div className='space-y-4'>
                        <div className='inline-flex items-center px-4 py-2 bg-orange-700/20 border border-orange-700/30 rounded-full w-fit'>
                            <span className='text-orange-500 text-sm font-medium'>About Leadership</span>
                        </div>
                        
                        <div className='space-y-2'>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                                Strategic Investment
                            </h1>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700'>Leadership</span>
                            </h1>
                        </div>
                    </div>
                    
                    {/* Content Blocks */}
                    <div className='space-y-6'>
                        <div className='relative pl-6 border-l-4 border-orange-700'>
                            <p className='text-gray-300 text-base lg:text-lg leading-relaxed'>
                                As CEO of Kodanda Investments Private Limited, I lead strategic investment decisions and financial market analysis with 
                                <span className='text-orange-500 font-medium'> expertise in share markets and investment strategies</span>.
                            </p>
                        </div>
                        
                        <div className='bg-gradient-to-r from-gray-900/50 to-transparent p-6 rounded-2xl border-l-4 border-orange-500'>
                            <p className='text-gray-300 text-base lg:text-lg leading-relaxed'>
                                Currently pursuing 
                                <span className='text-white font-medium'> MBA from IIM Indore</span> with focus on Business Administration, Management, and Finance.
                            </p>
                        </div>
                    </div>
                    
                    {/* Key Highlights */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl'>
                            <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                            <span className='text-gray-300'>Financial Analysis</span>
                        </div>
                        <div className='flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl'>
                            <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                            <span className='text-gray-300'>Investment Strategies</span>
                        </div>
                        <div className='flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl'>
                            <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                            <span className='text-gray-300'>Business Analysis</span>
                        </div>
                        <div className='flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl'>
                            <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                            <span className='text-gray-300'>Financial Markets</span>
                        </div>
                    </div>
                    
                    {/* CTA */}
                    <div className='pt-4'>
                        <a href="#contact">
                            <button className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-700 to-orange-600 text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'>
                                <span>Work With Me</span>
                                <IoMdArrowForward className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About