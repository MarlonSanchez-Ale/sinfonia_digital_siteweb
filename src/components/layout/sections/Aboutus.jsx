import Laptop from '../../../assets/img/Laptop.jpg'
import { Typography } from '@material-tailwind/react'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Aboutus() {
  return (
    <section id="aboutus" className=" min-h-[90vh] flex flex-col gap-10 justify-center my-20">
      <div className="flex flex-col gap-3 justify-center">
        <h2 className="title_principal">Somos Sinfonía <span className="title_contrast">Digital</span></h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className='grid place-items-center'>
          <img src={Laptop} loading='lazy' className=' w-96 h-96'  />
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='description text-start'>
            Impulsamos el éxito de tu marca a través de estrategias innovadoras y creativas. Te proponemos soluciones personalizadas
            que te ayudarán a alcanzar tus objetivos. Desde el diseño de campañas impactantes hasta la implementación de estrategias digitales
            efectivas, somos tu mejor aliado en el camino hacia el crecimiento y la excelencia.
          </p>
          <p className='description text-start'>
            Te brindamos una experiencia más humana que construye una comunicación más asertada y directa en tus redes sociales,
            landing pages y sitios web. ¡Comenzá tu aventura creativa con nosotros!
          </p>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className=" font-rubik bg-yellowsd rounded-md p-3 sm:w-full md:w-44 shadow-md hover:bg-bluesd mt-3"
          >
            <a href="#contact" className="flex text-rubik text-lg justify-between items-center text-gray-100 transition-colors gap-5">
              Conocé más
              <AiOutlineArrowRight size={25} />
            </a>

          </Typography>
        </div>
      </div>
    </section>
  )
}
