export default function Testimonials() {
    return (
        <section className="flex flex-col items-start px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto mt-16">

            {/* Badge */}
            <div className="flex items-center mr-auto gap-2 text-primary bg-primary/10 rounded-full px-3 py-1">
                <span>Customer Reviews</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-medium bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text mt-4">
                Freshness Loved by Thousands
            </h1>

            <p className="text-gray-500 mt-4 max-w-2xl">
                From farm-fresh vegetables to organic fruits, our customers love the quality,
                speed, and convenience we bring to their doorstep.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                {/* Card 1 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        The fruits are always fresh and delivered on time. My weekly grocery
                        shopping has never been this easy!
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Priya Sharma</h2>
                            <p className="text-gray-500 text-sm">Mumbai</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        Affordable prices and excellent quality vegetables. I love the organic
                        options available every week.
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Rahul Verma</h2>
                            <p className="text-gray-500 text-sm">Bangalore</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        Super fast delivery and eco-friendly packaging. Highly recommended for
                        busy families!
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Ananya Patel</h2>
                            <p className="text-gray-500 text-sm">Delhi</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        The dairy products are always fresh and well-packed. I trust this store
                        for my daily essentials.
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Karan Mehta</h2>
                            <p className="text-gray-500 text-sm">Pune</p>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        Amazing discounts and combo offers! It saves me both time and money every month.
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/21.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Sneha Reddy</h2>
                            <p className="text-gray-500 text-sm">Hyderabad</p>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="border border-gray-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-500">
                    <p className="text-base text-gray-500">
                        Customer support is very responsive and helpful. I had a great experience
                        with my first order.
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/men/12.jpg"
                            alt="user" />
                        <div>
                            <h2 className="font-medium text-gray-900">Arjun Nair</h2>
                            <p className="text-gray-500 text-sm">Chennai</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
