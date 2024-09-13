import { Typography } from "@material-tailwind/react";
import LogoSD from "../LogoSD/LogoSD";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="w-full bg-white sm:px-5  lg:px-10 p-10  rounded-md">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <div className="flex flex-col gap-3 place-items-start text-start">
                    <LogoSD />
                    <p className="description">Un equipo apasionado por el mundo digital</p>
                    <div className=" flex sm:flex-col md:flex-row gap-5">
                        <Typography
                            as="a"
                            href="#"
                            className="font-normal text-gray-500 flex flex-row gap-2 transition-colors hover:text-yellowsd"
                        >
                            <FaPhone size={20} className="text-gray-500" />
                            +505 8506 7228
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="font-normal flex flex-row justify-center gap-2 text-gray-500 transition-colors hover:text-yellowsd "
                        >
                            <TbMailFilled size={20} className="text-gray-500 mt-1" />
                            sinfoniadigitalinfo@gmail.com
                        </Typography>
                    </div>
                </div>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#hero"
                            color="blue-gray"
                            className="font-normal font-rubik transition-colors text-gray-500"
                        >
                            Inicio
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#aboutus"
                            color="blue-gray"
                            className="font-normal font-rubik transition-colors text-gray-500"
                        >
                            Somos SD
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#services"
                            color="blue-gray"
                            className="font-normal font-rubik transition-colors text-gray-500"
                        >
                           Servicios
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#contact"
                            color="blue-gray"
                            className="font-normal transition-colors text-gray-500"
                        >
                            Contactar
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography className="text-center text-gray-500 font-rubik font-normal">
                Sinfonía Digital  2024 © All right reserved
            </Typography>
        </footer>
    )
}
