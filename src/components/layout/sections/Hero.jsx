import Bombilla from '../../../assets/img/Bombilla.jpg'
import { Typography } from '@material-tailwind/react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function Hero() {


  const UrlFacebook = "https://www.facebook.com/profile.php?id=61557617054786 "
  const UrlInstagram = "https://www.instagram.com/sinfoniadigitalni/ "
  const UrlWhatsapp = "https://wa.link/k7p4p9"

  
  return (
        <section id="hero" className="lg:min-h-[90vh] grid sm:grid-cols-1 lg:grid-cols-2 sm:p-5 lg:p-0 ">
          <div className='grid place-items-center'>
            <img src={Bombilla} loading='lazy' className=' md:w-96 md:h-96' />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <div className='flex flex-col gap-4'>
              <p className='description text-start'>Agencia Creativa</p>
              <h1 className='title_principal text-start'>Un equipo apasionado por el marketing <span className='title_contrast'>digital</span></h1>
              <p className='subtitle text-start'>¡Convertimos la visión de tu marca en realidad!</p>
            </div>
            <div className='flex flex-row gap-5'>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" font-rubik bg-yellowsd rounded-md p-4 sm:w-44 md:w-56  shadow-md hover:bg-bluesd mt-3"
              >
                <a href="#contact" className="flex text-rubik items-center text-xl text-gray-100 transition-colors">
                  Conocé más
                </a>
              </Typography>
              <div className='grid grid-cols-3 place-items-center mt-3 gap-3'>
                <span onClick={() => window.open(UrlFacebook, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                  <FaFacebook size={20} color='gray' />
                </span>
                <span onClick={() => window.open(UrlInstagram, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                  <FaInstagram size={20} color='gray' />
                </span>
                <span onClick={() => window.open(UrlWhatsapp, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                  <FaWhatsapp size={20} color='gray' />
                </span>
              </div>
            </div>
          </div>
        </section>

  )
}
