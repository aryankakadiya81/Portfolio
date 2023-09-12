import React from 'react'

const Footer = () => {
    return (
        <>
            <div>


                <div className=" p-4 items-center justify-center">
                    <div className="flex justify-center pt-10 pb-14 md:pb-9"> <img className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]" alt=""/> </div>
                    <div className="space-y-9 grid lg:flex lg:justify-between md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">


                        <div className="md:flex md:justify-center flex-col justify-between">
                            <div className="text-black text-[15px] font-[550] leading-7 tracking-wide">
                                <div className="flex justify-start">
                                    <h1 className="text-black pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        About </h1> <span className="text-black font-sans uppercase font-normal tracking-wider">exam</span>
                                </div>
                                <p> <a className="hover:text-[#cacaca]" href="#">Apply</a> </p>
                                <p> <a className="hover:text-[#cacaca]" href="#">Eligibility</a> </p>
                                <p> <a className="hover:text-[#cacaca]" href="#">Application Process</a> </p>
                                <p> <a className="hover:text-[#cacaca]" href="#">Syllabus</a> </p>
                            </div>

                        </div>
                        <div>
                            <div className="text-black text-[15px] font-[550] leading-6 tracking-wide mt-0 md:order-5 md:pt-0 lg:pb-28">
                                <div className="flex justify-start">
                                    <h1 className="text-black pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        support </h1>
                                </div>
                                <p> <a href="#" className="hover:text-[#cacaca]">FAQ's</a> </p>
                            </div>
                        </div>
                        <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
                            <div className="flex justify-start">
                                <h1 className="text-black pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                    get in touch</h1>
                            </div>
                            <p className="space-x-3"> <i className="fa fa-home text-[17px] " /></p>
                            <div className="leading-7 text-black">
                                <p> NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab (INDIA) <br /> General Helpline
                                    No:+91 987-6543-210 </p>
                            </div>

                        </div>
                    </div>
                    
                    
                </div>
                <div className='bg-black w-full text-white text-center py-10 font-bold text-xl'>
                Copirigt is Reserverd by @ARYAN KAKADIYA
                </div>

            </div>
        </>
    )
}

export default Footer
