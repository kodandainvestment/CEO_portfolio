import { FaLightbulb, FaUsers, FaRocket, FaHandshake } from "react-icons/fa";
import { MdVisibility, MdFlag } from "react-icons/md";

export default function Leadership() {
  const principles = [
    {
      icon: <FaLightbulb />,
      title: "Strategic Investment",
      description: "Focusing on data-driven investment decisions and comprehensive market analysis to maximize returns and minimize risks."
    },
    {
      icon: <FaUsers />,
      title: "Continuous Learning",
      description: "Balancing academic excellence at IIM Indore with practical leadership experience to drive organizational growth."
    },
    {
      icon: <FaRocket />,
      title: "Financial Excellence",
      description: "Maintaining focus on financial analysis, reporting, and budgeting to ensure sustainable business operations."
    },
    {
      icon: <FaHandshake />,
      title: "Ethical Leadership",
      description: "Leading with integrity and transparency while fostering growth and value creation for all stakeholders."
    }
  ];

  return (
    <section className="bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4'>
            Leadership <span className='text-orange-700'>Philosophy</span>
          </h1>
          <p className='text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
            Core principles that guide strategic investment decisions and organizational leadership at Kodanda Investments.
          </p>
        </div>

        {/* Vision & Mission - Glass Morphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Vision */}
          <div className="group relative">
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300">
                  <MdVisibility />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create organizations that don't just adapt to change, but actively shape the future of their industries through innovation, strategic thinking, and unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative">
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300">
                  <MdFlag />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower teams, drive sustainable growth, and build lasting value for all stakeholders while maintaining the highest standards of ethical leadership and social responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Principles - Floating Cards */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
            Core Leadership <span className="text-orange-700">Principles</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="group relative transform transition-all duration-500 hover:scale-105">
                {/* Floating Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-700/10 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-700/50 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-700 to-orange-500 rounded-xl flex items-center justify-center text-xl transform group-hover:rotate-12 transition-transform duration-300">
                        {principle.icon}
                      </div>
                      <div className="absolute -inset-2 bg-orange-700/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors duration-300">{principle.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section - Neon Style */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700/20 via-transparent to-orange-700/20 rounded-3xl blur-2xl"></div>
          <div className="relative backdrop-blur-sm bg-black/30 border border-orange-700/30 rounded-3xl p-12 shadow-2xl">
            <div className="text-orange-700 text-6xl mb-6 animate-pulse">"</div>
            <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-6 font-serif">
              Success in investment and leadership comes from combining academic knowledge with practical experience, always focusing on sustainable growth and value creation for all stakeholders.
            </blockquote>
            <div className="text-orange-500 font-bold text-lg tracking-wider">— CHAHAT TIWARI, CEO</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}