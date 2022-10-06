import { useState } from "react";

import { close, logo, menu } from '../assets'
import { navLinks } from "../constant";

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="flex w-full justify-between items-center py-6 navbar">
            <img src={logo} alt="hood bank" className="width-[124px`] h-[32px]" />

            <ul className="hidden sm:flex list-none sm:flex justify-end items-center">
                {navLinks.map((nav, index) => {
                    return (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}><a href={`#${nav.id}`}>{nav.title}</a></li>
                    )
                })}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu}
                    alt="hamburger-menu"
                    className="w-[28] h-[28] object-contain"
                    onClick={() => setToggle((prev) => !prev)}

                />

                <div className={`${toggle ? 'block' : 'hidden'} 
                p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="flex list-none flex-col justify-end items-center">
                        {navLinks.map((nav, index) => {
                            return (
                                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}><a href={`#${nav.id}`}>{nav.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;