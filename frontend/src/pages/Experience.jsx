import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Experience() {
    const experiences = [
        {
            company: "Goldman Sachs",
            role: "Fund Manager",
            description: "Managed investment portfolios and executed strategic fund management decisions in global financial markets.",
            icon: <FaBuilding />
        },
        {
            company: "Axis Bank",
            role: "Fund Manager", 
            description: "Specialized in fund management operations, risk assessment, and investment strategy development for institutional clients.",
            icon: <FaBuilding />
        }
    ];

    return (
        <div className='bg-gray-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-700 via-transparent to-orange-500"></div>
            </div>
            
            <div className='container mx-auto relative z-10'>
                <div className='text-center mb-12'>
                    <div className='inline-flex items-center px-4 py-2 bg-orange-700/20 border border-orange-700/30 rounded-full mb-6'>
                        <MdWork className='text-orange-500 mr-2' />
                        <span className='text-orange-500 text-sm font-medium'>Professional Journey</span>
                    </div>
                    <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                        Professional <span className='text-orange-700'>Experience</span>
                    </h1>
                    <p className='text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
                        Fund management expertise gained from leading financial institutions before founding Kodanda Investments.
                    </p>
                </div>
                
                <div className='max-w-4xl mx-auto space-y-8'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='group relative transform transition-all duration-500 hover:-translate-y-2'>
                            <div className='bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-orange-700/50 transition-all duration-300 shadow-xl'>
                                <div className='flex items-start space-x-6'>
                                    <div className='w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                                        {exp.icon}
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-white text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300'>
                                            {exp.role}
                                        </h3>
                                        <p className='text-orange-500 font-semibold text-lg mb-4'>{exp.company}</p>
                                        <p className='text-gray-300 text-base leading-relaxed'>{exp.description}</p>
                                    </div>
                                </div>
                                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-700/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience