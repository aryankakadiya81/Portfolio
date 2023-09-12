import React from 'react';
// import Img from '../assets/img1.jpg';

const Contect_Section = () => {
    return (
        <>
            <div>
                <div className="flex justify-center bg-gradient-to-r pb-10" style={{
                    backgroundImage: `url(https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=900&t=st=1694513157~exp=1694513757~hmac=df7c18bef6e7ae843f0c9bfd946cf57809dceb5cbe54a9877828d9487483158c)`
                }}>
                    <div className="flex flex-col justify-center mt-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl  ">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="animate-bounce text-xl md:text-3xl font-bold uppercase my-3">
                                 Contact Us
                            </div>
                            <div className="text-sm md:text-xl font-medium">
                                Get in touch and let us know how we can help.
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
                            <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
                                <div className="-mt-10">
                                    <ion-icon
                                        name="bar-chart-outline"
                                        className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                                    ></ion-icon>
                                </div>
                                <div className="font-semibold text-2xl">Sales</div>
                                <p className="text-center text-lg p-5">
                                    We would love to talk about how we can work together.
                                </p>
                                <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                                    <a href="#">Contact Sales</a>
                                </p>
                            </div>
                            <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
                                <div className="-mt-10  ">
                                    <ion-icon
                                        name="help-outline"
                                        className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                                    ></ion-icon>
                                </div>
                                <div className="font-semibold text-2xl">Help &amp; Support</div>
                                <p className="text-center text-lg p-5">
                                    We are here to help with any questions or code.
                                </p>
                                <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                                    <a href="#">Get Support</a>
                                </p>
                            </div>
                            <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
                                <div className="-mt-10  ">
                                    <ion-icon
                                        className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                                    ></ion-icon>
                                </div>
                                <div className="font-semibold text-2xl">Media &amp; Press</div>
                                <p className="text-center text-lg p-5">
                                    Get Stripe news, company info, and media resources.
                                </p>
                                <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                                    <a href="#">Visit Newsroom</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contect_Section
