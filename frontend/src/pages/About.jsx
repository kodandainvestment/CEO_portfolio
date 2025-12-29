import ceoImg from '../Images/Man-2.png'
import { IoMdArrowForward } from "react-icons/io";
import { CgAwards } from "react-icons/cg";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbCalendarEvent } from "react-icons/tb";


function About() {

    const block = [
        {
            icon: <CgAwards />,
            numbers: "15+",
            name: "Awards",
        },
        {
            icon: <PiBuildingApartmentFill />,
            numbers: "8",
            name: "Companies",
        },
        {
            icon: <TbCalendarEvent />,
            numbers: "$15B+",
            name: "Revenue",
        },
    ]
    return (
        <div className='min-h-screen bg-black flex items-center'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                {/* image section */}
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <div className='relative w-80 h-96'>
                        <img
                            src={ceoImg}
                            alt="CEO Portrait"
                            className='w-full h-full object-cover grayscale contrast-125 brightness-110 rounded-lg shadow-2xl'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg'></div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {block.map((item, index) => (
                            <div key={index} className="bg-gray-950 rounded-lg p-4 text-center backdrop-blur-sm">
                                <div className="text-orange-500 text-2xl mb-2 flex justify-center">{item.icon}</div>
                                <div className="text-white text-xl font-bold">{item.numbers}</div>
                                <div className="text-gray-400 text-xs">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* text section */}
                <div className='flex flex-col justify-center space-y-6 py-12 px-8 rounded-lg' style={{ background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(0, 0, 0, 1) 70%)' }}>
                    <div>
                        <h2 className='text-sm text-orange-500 font-medium'>Chief Executive Officer</h2>
                        <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>Building Tomorrow's</h1>
                        <h1 className='text-4xl md:text-5xl font-bold text-orange-500 leading-tight'>Leaders</h1>
                    </div>
                    <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>As a seasoned executive with over two decades of experience, I've led transformative initiatives across technology, finance, and healthcare sectors. My approach combines analytical rigor with visionary thinking.</p>
                    <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>I believe that exceptional leadership isn't about having all the answers—it's about asking the right questions, empowering teams, and creating environments where innovation thrives. Throughout my career, I've built organizations that don't just succeed, but redefine their industries.</p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <button className='bg-orange-700 hover:bg-orange-900 text-black px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2'>Work With Me <IoMdArrowForward /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About