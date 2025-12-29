import ceoImg from '../Images/Man in black suit looking confident.png'

function Home() {
    return (
        <div className='min-h-screen bg-black flex items-center'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                {/* text section */}
                <div className='flex flex-col justify-center space-y-6 py-12 px-8 rounded-lg' style={{background: 'radial-gradient(circle, rgba(243, 112, 5, 0.2) 0%, rgba(0, 0, 0, 1) 70%)'}}>
                    <h2 className='text-sm text-orange-500 font-medium'>Chief Executive Officer</h2>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>Driving Vision,</h1>
                        <h1 className='text-4xl md:text-5xl font-bold text-orange-500 leading-tight'>Delivering Results</h1>
                    </div>
                    <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>Transforming enterprises through strategic leadership, innovative thinking, and a relentless pursuit of excellence. Over 20 years of building billion-dollar organizations.</p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <button className='bg-orange-700 hover:bg-orange-900 text-black px-6 py-3 rounded-md font-medium transition-colors'>GET IN TOUCH</button>
                        <button className='text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-black px-6 py-3 rounded-md font-medium transition-colors'>VIEW MY WORK</button>
                    </div>
                </div>

                {/* image section */}
                <div className='flex items-center justify-center'>
                    <div className='relative w-80 h-102'>
                        <img 
                            src={ceoImg} 
                            alt="CEO Portrait" 
                            className='w-full h-full object-cover grayscale contrast-125 brightness-110 rounded-lg shadow-2xl' 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home