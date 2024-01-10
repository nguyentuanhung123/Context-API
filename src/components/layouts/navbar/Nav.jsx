import { useEffect, useState } from "react";

//icons
import { FaReact } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {

    let Links = [
        {
            name: "home",
            link: "/"
        },
        {
            name: "user",
            link: "/user"
        },
        {
            name: "dark-light-mode",
            link: "/dark-light-mode"
        }
    ]

    const { pathname } = useLocation();

    let [open, setOpen] = useState(false);

    //pathname change -> close sidebar (only mobile view)
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 h-[80px]">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
                    <span className="text-3xl text-indigo-600 mr-1">
                        <FaReact />
                    </span>
                    Designer
                </div>
                <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <IoMdClose /> : <MdOutlineMenu />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[85px] opacity-100 shadow-md' : 'top-[-490px]'} md:opacity-100 md:shadow-none opacity-0`}>
                    {
                        Links.map((Link) => {
                            return (
                                <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                    <NavLink to={Link.link} className="text-gray-800 hover:text-gray-400 duration-500 uppercase">{Link.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Nav;