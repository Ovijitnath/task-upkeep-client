import React from 'react';

const Home = () => {
    return (
        <div>
            <section>
                <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg
                            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                            preserveAspectRatio="none slice"
                        >
                            <path d="M50 0H100L50 100H0L50 0Z" />
                        </svg>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                            src="https://cdn3.meistertask.com/assets/content/home/2021/usecase-campaign-8379e62e299b08db50d7b33169822b53b2ff61251417ab0576023030653f70e8.svg"
                            alt=""
                        />
                    </div>
                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Everything you
                                <br className="hidden md:block" />
                                can imagine{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    is real
                                </span>
                            </h2>
                            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                            <div className="flex items-center">
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-emerald-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    Get started
                                </a>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <div>
                                    {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                        Brand new
                                    </p> */}
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Innovative analytics
                                    <br className="hidden md:block" />
                                    that you{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        will love
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae. explicabo.
                                </p>
                            </div>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold  text-teal-500 hover:text-teal-800"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="relative">
                            <svg
                                className="absolute w-full text-teal-400"
                                fill="currentColor"
                                viewBox="0 0 600 392"
                            >
                                <rect x="0" y="211" width="75" height="181" rx="8" />
                                <rect x="525" y="260" width="75" height="132" rx="8" />
                                <rect x="105" y="83" width="75" height="309" rx="8" />
                                <rect x="210" y="155" width="75" height="237" rx="8" />
                                <rect x="420" y="129" width="75" height="263" rx="8" />
                                <rect x="315" y="0" width="75" height="392" rx="8" />
                            </svg>
                            <svg
                                className="relative w-full text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 600 392"
                            >
                                <rect x="0" y="311" width="75" height="81" rx="8" />
                                <rect x="525" y="351" width="75" height="41" rx="8" />
                                <rect x="105" y="176" width="75" height="216" rx="8" />
                                <rect x="210" y="237" width="75" height="155" rx="8" />
                                <rect x="420" y="205" width="75" height="187" rx="8" />
                                <rect x="315" y="83" width="75" height="309" rx="8" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                        <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                            <div className="relative">
                                <img
                                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                    src="https://img.freepik.com/free-photo/hiring-concept-with-people-coming-together_23-2149519873.jpg?w=2000"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                            </div>
                            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Join Team
                                </h5>
                                <p className="mb-5 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                    perspiciatis unde.
                                </p>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                                >
                                    Read more
                                </button>
                            </div>
                        </div>
                        <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                            <div className="relative">
                                <img
                                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                    src="https://thumbs.dreamstime.com/b/business-concept-business-woman-businessman-holding-hire-us-banner-vector-illustration-74364724.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                            </div>
                            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                    Hire Us
                                </h5>
                                <p className="mb-5 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                    perspiciatis unde.
                                </p>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-teal-400 hover:bg-teal-700  focus:shadow-outline focus:outline-none"
                                >
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;