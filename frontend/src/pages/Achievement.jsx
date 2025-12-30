import { FaTrophy, FaAward, FaMedal, FaStar, FaChartLine, FaGlobe } from "react-icons/fa";
import { MdBusinessCenter, MdTrendingUp } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

function Achievement() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "CEO Leadership Role",
      year: "2025",
      organization: "Kodanda Investments Private Limited",
      description: "Leading strategic investment decisions and financial market analysis as Chief Executive Officer."
    },
    {
      icon: <FaChartLine />,
      title: "IIM Indore Admission",
      year: "2022",
      organization: "Indian Institute of Management, Indore",
      description: "Pursuing BBA+MBA with specialization in Business Administration, Management, and Finance."
    },
    {
      icon: <FaGlobe />,
      title: "Financial Markets Expertise",
      year: "2025",
      organization: "Investment Strategies",
      description: "Developed comprehensive expertise in share markets and investment strategies for sustainable growth."
    },
    {
      icon: <MdBusinessCenter />,
      title: "Business Analysis Skills",
      year: "2024",
      organization: "Professional Development",
      description: "Advanced proficiency in financial analysis, business analysis, and strategic decision-making."
    },
    {
      icon: <FaAward />,
      title: "Chess Excellence",
      year: "Ongoing",
      organization: "IIM Indore Activities",
      description: "Active participation in chess activities, demonstrating strategic thinking and analytical skills."
    },
    {
      icon: <BsGraphUpArrow />,
      title: "Hybrid Leadership",
      year: "2025",
      organization: "Indore, Madhya Pradesh",
      description: "Successfully managing CEO responsibilities in hybrid work environment, balancing studies and leadership."
    }
  ];

  const stats = [
    { number: "5+", label: "Months as CEO" },
    { number: "IIM", label: "Indore Graduate" },
    { number: "2027", label: "Graduation Year" },
    { number: "1", label: "Company Leading" }
  ];

  return (
    <div className='bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4'>
            Key <span className='text-orange-700'>Achievements</span>
          </h1>
          <p className='text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
            Current achievements and milestones in leadership, education, and professional development at Kodanda Investments.
          </p>
        </div>

        {/* Stats Counter */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
            <div key={index} className='group text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-orange-700/50 transition-all duration-300'>
              <div className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 mb-2 group-hover:scale-110 transition-transform duration-300'>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid - Modern Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
          {achievements.map((achievement, index) => (
            <div key={index} className='group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700 hover:border-orange-700/50 transition-all duration-500 hover:-translate-y-2'>
              {/* Background Pattern */}
              <div className='absolute inset-0 bg-gradient-to-br from-orange-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              {/* Year Badge */}
              <div className='absolute top-4 right-4 bg-orange-700 text-black px-3 py-1 rounded-full text-sm font-bold'>
                {achievement.year}
              </div>
              
              <div className='relative p-6 space-y-4'>
                {/* Icon */}
                <div className='w-16 h-16 bg-gradient-to-br from-orange-700/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-orange-500 text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                  {achievement.icon}
                </div>
                
                {/* Content */}
                <div className='space-y-3'>
                  <h3 className='text-white text-xl font-bold group-hover:text-orange-300 transition-colors duration-300'>
                    {achievement.title}
                  </h3>
                  <div className='text-orange-500 text-sm font-medium'>
                    {achievement.organization}
                  </div>
                  <p className='text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                    {achievement.description}
                  </p>
                </div>
                
                {/* Bottom Accent */}
                <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-700 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className='text-center mt-16'>
          <div className='inline-block relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative bg-gradient-to-r from-orange-700 to-orange-500 p-8 rounded-3xl transform group-hover:scale-105 transition-transform duration-300'>
              <h3 className='text-black text-2xl font-bold mb-4'>Ready to Drive Results Together?</h3>
              <p className='text-black/80 mb-6'>Let's discuss how my proven track record can help accelerate your organization's growth.</p>
              <button className='bg-black text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors'>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Achievement