import Laptop from '../../../assets/img/Laptop.jpg'
import { Typography } from '@material-tailwind/react'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Aboutus() {
  return (
    <section id="aboutus" className=" min-h-[90vh] flex flex-col gap-10 justify-center my-20">
      <div className="flex flex-col gap-3 justify-center">
        <h2 className="title_principal">Somos Sinfonía <span className="title_contrast">Digital</span></h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className='grid place-items-center'>
          <img src={Laptop} loading='lazy' className='' />
        </div>
        <div className='flex flex-col justify-center gap-5'>
        <p className='description text-start'>
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code,
          </p>
          <p className='description text-start'>
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code,
            sculpting intangible structures that shape our technological world. With fingers poised over keyboards like
            virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs
            and applications.
          </p>
          <p className='description text-start'>
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code,
            sculpting intangible structures that shape our technological world. With fingers poised over keyboards like
            virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs
            and applications.
          </p>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className=" font-rubik bg-yellowsd rounded-md p-3 w-40 shadow-md hover:bg-bluesd mt-3"
          >
            <a href="#" className="flex text-rubik items-center text-gray-100 transition-colors gap-5">
              Conocé más
              <AiOutlineArrowRight size={20} />
            </a>

          </Typography>
        </div>
      </div>
    </section>
  )
}
