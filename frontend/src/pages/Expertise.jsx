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
            title: "Strategic Growth",
            des: "Architecting scalable business models and driving sustainable revenue growth across global markets.",
        },
        {
            icon: <RiTeamFill />,
            title: "Team Leadership",
            des: "Building high-performance executive teams and fostering cultures of innovation and accountability.",
        },
        {
            icon: <CiCircleMore />,
            title: "Operational Excellence",
            des: "Streamlining operations to maximize efficiency while maintaining the highest quality standards.",
        },
        {
            icon: <IoBulbOutline />,
            title: "Innovation Strategy",
            des: "Identifying disruptive opportunities and implementing cutting-edge solutions across industries.",
        },
        {
            icon: <FiShield />,
            title: "Risk Management",
            des: "Navigating complex regulatory landscapes and mitigating enterprise-level risks proactively.",
        },
        {
            icon: <RiGlobalLine />,
            title: "Global Expansion",
            des: "Leading international market entry strategies and cross-cultural business development.",
        }
    ];

    return (
        <div className='bg-gray-950 py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h1 className='text-white font-bold text-5xl mb-4'>
                        Leadership <span className='text-orange-700'>Expertise</span>
                    </h1>
                    <p className='text-white text-lg'>
                        Two decades of executive experience across Fortune 500 companies, startups, and global enterprises.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {expertise.map((item, index) => (
                        <div key={index} className='bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-orange-700 hover:shadow-[0_0_50px_rgba(194,65,12,0.5)] transition-all duration-300'>
                            <div className='bg-orange-700 bg-opacity-20 text-orange-700 text-3xl mb-4 w-12 h-12 flex items-center justify-center rounded-lg'>
                                {item.icon}
                            </div>
                            <h3 className='text-white text-xl font-semibold mb-3'>
                                {item.title}
                            </h3>
                            <p className='text-gray-300 text-sm leading-relaxed'>
                                {item.des}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expertise