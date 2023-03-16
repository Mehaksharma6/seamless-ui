import React from "react"
import Navbar from 'components/Navbar'
import Footer from "components/Footer"


const Home = () => (
    <div className='index-bg '>
        <Navbar />
        <div className="relative">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center md:px-36 -mt-40 md:-mb-28">
                <div className="mb-28 md:mb-0 p-4">
                    <h1 className="font-bold md:text-5xl text-white md:mb-4 text-3xl mb-2">Contact Us</h1>
                    <p className=" text-[#7EE787] mb-8 md:text-lg">Have any questions?We’d love to hear from you</p>
                    <div className="gap-0">


                        <p className="text-white -mb-3">Email</p>
                        <input placeholder="Enter the Email" className=" border-2 border-[#7EE787] md:p-3 p-1 pr-28 md:pr-48 rounded-lg my-3 index-bg"></input>
                    </div>
                    <div>

                        <p className="text-white -mb-3">Subject</p>
                        <input placeholder="Enter the Subject" className="border-2 border-[#7EE787] md:p-3 md:pr-48 p-1 pr-28 rounded-lg my-3 index-bg "></input>
                    </div>
                    <div>
                        <div className="green-gradient  absolute md:left-84 left-0 md:block hidden"></div>
                        <div className="green-gradient  absolute md:right-84 md:top-72 right-0"></div>

                        <p className="text-white -mb-3">Write here</p>
                        <input placeholder="How can we help you" className="border-2 border-[#7EE787] md:p-3 p-1 pr-28  rounded-lg my-3 md:pb-28 md:pr-48 index-bg pb-28"></input>
                    </div>
                </div>
                <img src="/input.png" className="md:w-6/12 md:mb-40 w-full  -ml-20 my-28 md:my-0" />
            </div>
        </div>
        <Footer />
    </div>

)


export default Home