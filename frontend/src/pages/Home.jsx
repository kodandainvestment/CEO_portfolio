import ceoImg from '/ceo.png'
import Contact from './Contact.jsx';

function Home() {
  return (
    <div className="
      bg-black
      min-h-screen
      flex
      items-start lg:items-center 2xl:items-start
      justify-center
      pt-20 lg:pt-24 2xl:pt-32
      px-4 sm:px-6 lg:px-8
      relative overflow-hidden
    ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-700/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700/5 rounded-full blur-3xl" />
      </div>

      <div className="
        container mx-auto
        grid grid-cols-1 lg:grid-cols-12
        gap-6 sm:gap-8 lg:gap-12
        min-h-[calc(100vh-6rem)]
        relative z-10
        items-center
      ">
        {/* Text Section */}
        <div className="
          lg:col-span-7
          flex flex-col
          justify-center
          space-y-4
          lg:space-y-6
          2xl:space-y-10
          order-2 lg:order-1
        ">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-700/20 border border-orange-700/30 rounded-full w-fit">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse" />
            <span className="text-orange-500 text-sm font-medium">
              CEO @ Kodanda Investments
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 2xl:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">
              Chahat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                Tiwari
              </span>
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">
              Investment Strategist
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base lg:text-lg 2xl:text-xl leading-relaxed max-w-xl">
            Leading strategic investment decisions and financial market analysis at Kodanda Investments.
            <span className="text-orange-500 font-medium"> MBA from IIM Indore</span> with expertise in financial markets.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 2xl:gap-6 pt-3 2xl:pt-8">
            <a href="#contact">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 bg-gradient-to-r from-orange-700 to-orange-600 text-black font-semibold rounded-xl hover:scale-105 transition">
                GET IN TOUCH
              </button>
            </a>
            <a href="#achievement">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 border-2 border-orange-700 text-orange-700 font-semibold rounded-xl hover:bg-orange-700 hover:text-black transition">
                VIEW MY WORK
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 lg:gap-8 2xl:gap-12 pt-4 2xl:pt-10 border-t border-gray-800">
            {[
              ["MBA", "IIM Indore"],
              ["CEO", "Leadership"],
              ["2027", "Graduate"],
            ].map(([value, label]) => (
              <div key={value} className="text-center">
                <div className="text-xl 2xl:text-2xl font-bold text-orange-500">
                  {value}
                </div>
                <div className="text-gray-500 text-xs 2xl:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="
              relative
              w-80 h-96
              lg:w-96 lg:h-[500px]
              xl:w-[420px] xl:h-[560px]
              2xl:w-[480px] 2xl:h-[640px]
            ">
              <img
                src={ceoImg}
                alt="Chahat Tiwari"
                className="w-full h-full object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            </div>

         
                        <div className='absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-700 to-orange-500 rounded-2xl hidden sm:flex items-center justify-center text-white font-bold text-lg shadow-xl animate-bounce'>
                            CEO
                        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
