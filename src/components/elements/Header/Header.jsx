import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoSD from '../LogoSD/LogoSD';

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#hero" className="text-rubik flex items-center hover:text-yellowsd transition-colors">
                    Inicio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#aboutus" className="flex text-rubik items-center hover:text-yellowsd transition-colors">
                    Somos SD
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#services" className="flex text-rubik items-center hover:text-yellowsd transition-colors">
                    Servicios
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-rubik bg-yellowsd rounded-md p-2 shadow-md hover:bg-bluesd"
            >
                <a href="#contact" className="flex text-rubik items-center text-gray-100 transition-colors">
                    Contacto
                </a>
            </Typography>
        </ul>
    );
}


export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto  max-w-screen-xl px-6 py-3 bg-graysd">
            <div className="flex items-center justify-between text-blue-gray-900">
                <LogoSD />
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <AiOutlineClose className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <AiOutlineMenu className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
