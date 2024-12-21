export default function Catalogue() {
    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center min-h-screen px-4">
            {/* Header */}
            <div className="text-center w-full max-w-md bg-yellow-400 rounded-lg p-5 mt-7">
                <h1 className="text-3xl sm:text-4xl font-semibold">Product</h1>
                <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">Catalogue</h1>
            </div>

            {/* Main Image */}
            <div className="bg-slate-600 flex justify-center p-8 sm:p-16">
                <img 
                    src="image25.webp" 
                    alt="Catalogue showcase" 
                    className="shadow-md max-w-full h-auto"
                />
            </div>

            {/* Introduction Section */}
            <div className="text-center text-gray-500 px-4 py-8 sm:px-16">
                <h1 className="text-xl sm:text-2xl font-medium">Welcome to our Fashion Catalogue!</h1>
                <p className="mt-4 text-sm sm:text-base">
                    A fashion catalogue is a curated collection showcasing clothing, accessories, or 
                    style inspirations designed to captivate and inform potential buyers. It typically highlights 
                    the latest trends, seasonal collections, or signature pieces with high-quality imagery, 
                    descriptive details, and styling tips.
                </p>
            </div>

            {/* Feature Sections */}
            <div className="space-y-16">
                {/* Feature 1 */}
                <div className="flex flex-col sm:flex-row items-center">
                    <img 
                        src="/arrival-3.jpg"
                        alt="Elegant Fashion" 
                        className="rounded-3xl shadow-md w-72 sm:w-96"
                    />
                    <span className="text-3xl sm:text-5xl font-bold text-black mt-6 sm:mt-0 sm:ml-12">Elegant</span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col sm:flex-row-reverse items-center">
                    <img 
                        src="/Rectangle 20.png" 
                        alt="Vibrant Look" 
                        className="rounded-lg shadow-md w-72 sm:w-96"
                    />
                    <span className="text-3xl sm:text-5xl font-bold text-orange-600 mt-6 sm:mt-0 sm:mr-12">Vibrant</span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col sm:flex-row items-center">
                    <span className="text-3xl sm:text-5xl font-bold text-red-500 mb-6 sm:mb-0 sm:mr-12">Radiant</span>
                    <img 
                        src="/image9.png" 
                        alt="Radiant Style" 
                        className="rounded-lg shadow-md w-72 sm:w-96"
                    />
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col sm:flex-row items-center">
                    <img 
                        src="/arrival-4.jpg" 
                        alt="Sophisticated Style" 
                        className="rounded-3xl shadow-md w-72 sm:w-96"
                    />
                    <span className="text-3xl sm:text-5xl font-bold text-green-950 mt-6 sm:mt-0 sm:ml-12">Sophisticated</span>
                </div>

                {/* Feature 5 */}
                <div className="flex flex-col sm:flex-row-reverse items-center">
                    <img 
                        src="/Rectangle 21.png" 
                        alt="Luxurious Fashion" 
                        className="rounded-lg shadow-md w-72 sm:w-96"
                    />
                    <span className="text-3xl sm:text-5xl font-bold text-purple-600 mt-6 sm:mt-0 sm:mr-12">Luxurious</span>
                </div>
            </div>

            {/* Button */}
            <button className="text-lg sm:text-2xl font-medium rounded-2xl p-3 sm:p-4 bg-yellow-500 hover:text-yellow-600 hover:bg-white mt-10">
                See More
            </button>
        </div>
    );
}
