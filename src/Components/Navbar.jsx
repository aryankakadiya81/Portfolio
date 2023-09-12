import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='sticky top-0'>
            <nav className="self-center w-full max-w-7xl bg-white">
                <div className="flex md:flex-row flex-col justify-between items-center md:items-start border-b-2 border-blue-900">
                    <h1 className=" py-4 text-2xl font-sans font-bold px-10"><Link to="/">Portfolio</Link></h1>
                    <ul className="flex  items-center text-sm md:text-[18px] font-bold  md:px-10 my-2">
                        <li className="hover:underline  underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                            <Link to="/Team">Team</Link>
                        </li>
                        <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                            <Link to="/Contect">Contact</Link>
                        </li>
                        {

                            // <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                            //     <a href="#">Services</a>
                            // </li>

                        }
                        <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
