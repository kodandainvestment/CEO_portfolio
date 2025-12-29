export default function Leadership() {
  return (
    <section className="bg-black text-white py-20 font-mont">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold tracking-tight mb-24">
          VISION & MISSION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* 01 - Vision */}
          <div className="flex items-center gap-10">
            
            {/* Number */}
            <h3 className="text-5xl md:text-6xl font-extrabold text-white">
              01.
            </h3>

            {/* Broken Border Box */}
            <div className="relative px-10 py-16 text-left">
              {/* Border Box */}
              <div className="absolute inset-0 border border-white"></div>

              {/* Top Gap */}
              <div className="absolute -top-1 left-0 w-16 h-[2px] bg-black"></div>
              <div className="absolute -top-1 right-0 w-16 h-[2px] bg-black"></div>

              {/* Bottom Gap */}
              <div className="absolute -bottom-1 left-0 w-16 h-[2px] bg-black"></div>
              <div className="absolute -bottom-1 right-0 w-16 h-[2px] bg-black"></div>

              <h4 className="text-xl font-semibold text-[#1FA0E2] mb-4">
                Vision
              </h4>

              <p className="text-gray-300 leading-relaxed max-w-xs">
                To simplify and modernize investing through innovation,
                transparency, and data-driven insights.
              </p>
            </div>
          </div>

          {/* 02 - Mission */}
          <div className="flex items-center gap-10">
            
            {/* Number */}
            <h3 className="text-5xl md:text-6xl font-extrabold text-white">
              02.
            </h3>

            {/* Broken Border Box */}
            <div className="relative px-10 py-16 text-left">
              {/* Border Box */}
              <div className="absolute inset-0 border border-white"></div>

              {/* Top Gap */}
              <div className="absolute -top-1 left-0 w-16 h-[2px] bg-black"></div>
              <div className="absolute -top-1 right-0 w-16 h-[2px] bg-black"></div>

              {/* Bottom Gap */}
              <div className="absolute -bottom-1 left-0 w-16 h-[2px] bg-black"></div>
              <div className="absolute -bottom-1 right-0 w-16 h-[2px] bg-black"></div>

              <h4 className="text-xl font-semibold text-[#1FA0E2] mb-4">
                Mission
              </h4>

              <p className="text-gray-300 leading-relaxed max-w-xs">
                To empower every investor with smart strategies and ethical
                wealth management practices that stand the test of time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
