import { FaArrowTrendUp } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import { FiShield } from "react-icons/fi";

function Expertise() {
    const expertise = [
        {
            icon: <FaArrowTrendUp />,
            title: "Financial Analysis",
            des: "Expert analysis of financial markets, investment opportunities, and strategic financial decision-making.",
        },
        {
            icon: <RiTeamFill />,
            title: "Investment Strategies",
            des: "Developing comprehensive investment portfolios and strategies aligned with organizational growth objectives.",
        },
        {
            icon: <CiCircleMore />,
            title: "Business Analysis",
            des: "Analyzing market trends, business opportunities, and operational efficiency to drive sustainable growth.",
        },
        {
            icon: <IoBulbOutline />,
            title: "Financial Advisory",
            des: "Providing strategic financial guidance and advisory services to support informed business decisions.",
        },
        {
            icon: <FiShield />,
            title: "Financial Reporting",
            des: "Comprehensive financial reporting and budgeting to ensure transparency and regulatory compliance.",
        },
        {
            icon: <RiGlobalLine />,
            title: "Financial Accounting",
            des: "Managing financial accounting processes and ensuring accurate financial record-keeping and analysis.",
        }
    ];

    return (
        <div className='bg-gray-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-700 via-transparent to-orange-500"></div>
            </div>
            
            <div className='container mx-auto relative z-10'>
                <div className='text-center mb-8 sm:mb-12'>
                    <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                        Financial <span className='text-orange-700'>Expertise</span>
                    </h1>
                    <p className='text-white text-base sm:text-lg px-4'>
                        Specialized expertise in investment strategies, financial markets, and business analysis with academic foundation from IIM Indore.
                    </p>
                </div>
                
                {/* Diagonal Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {expertise.map((item, index) => (
                        <div key={index} className='group relative transform transition-all duration-500 hover:-translate-y-4'>
                            {/* Main Card */}
                            <div className='relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border-l-4 border-orange-700 hover:border-l-8 transition-all duration-300 shadow-xl hover:shadow-2xl h-full'>
                                {/* Icon Circle */}
                                <div className='relative mb-4'>
                                    <div className='w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-transform duration-300'>
                                        {item.icon}
                                    </div>
                                    <div className='absolute -inset-2 bg-orange-700/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </div>
                                
                                {/* Content */}
                                <h3 className='text-white text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors duration-300'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                                    {item.des}
                                </p>
                                
                                {/* Hover Accent */}
                                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-700/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            
                            {/* Number Badge */}
                            <div className='absolute -top-3 -right-3 w-8 h-8 bg-orange-700 text-black rounded-full flex items-center justify-center text-sm font-bold transform group-hover:scale-125 transition-transform duration-300'>
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expertise