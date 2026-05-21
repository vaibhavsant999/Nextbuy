const Header = () => {
    return (
        <div className="relative bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center bg-no-repeat">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 px-6 py-16 sm:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-left">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        <span className="block">Shop Smart,</span>
                        <span className="block">
                            Save <span className="text-amber-400 drop-shadow-lg">Big</span>
                        </span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        <small className="text-base sm:text-lg lg:text-xl">
                            Discover amazing deals on thousands of products. Quality items, 
                            unbeatable prices, and fast delivery - all in one place.
                        </small>
                    </p>
                    
                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <button className="group bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <span className="flex items-center justify-center">
                                Shop Now
                                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                            </span>
                        </button>
                        
                        <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                            <span className="flex items-center justify-center">
                                <i className="fa-solid fa-play mr-2 group-hover:text-amber-500 transition-colors duration-300"></i>
                                Watch Demo
                            </span>
                        </button>
                    </div>
                    
                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-3 mt-10">
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                            <i className="fa-solid fa-shipping-fast mr-2 text-green-400"></i>
                            Free Shipping
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                            <i className="fa-solid fa-shield-alt mr-2 text-blue-400"></i>
                            Secure Payment
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                            <i className="fa-solid fa-undo mr-2 text-purple-400"></i>
                            Easy Returns
                        </span>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 hidden lg:block animate-bounce">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        <i className="fa-solid fa-percent mr-1"></i>
                        50% OFF
                    </div>
                </div>
                
                <div className="absolute bottom-10 right-20 hidden lg:block animate-pulse">
                    <div className="bg-green-500 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg">
                        <i className="fa-solid fa-star mr-1"></i>
                        Trending
                    </div>
                </div>
            </div>
            
            {/* Bottom Wave Effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg 
                    className="relative block w-full h-16" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Header
