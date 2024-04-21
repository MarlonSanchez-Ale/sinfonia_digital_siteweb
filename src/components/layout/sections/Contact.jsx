import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../../elements/ContactForm/ContactForm";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,

    },
    exit: {
        opacity: 1,
        x: 0
    }
}

export default function Contact() {

    const UrlFacebook = "https://www.facebook.com/profile.php?id=61557617054786 "
    const UrlInstagram = "https://www.instagram.com/sinfoniadigitalni/ "
    const UrlWhatsapp = "https://wa.link/k7p4p9"

    return (
        <motion.section
            id="contact"
            className="flex flex-col gap-10 justify-center min-h-[90vh] sm:px-5 lg:px-20 my-28"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            layoutScroll
            exit={{ x: 0 }}
            transition={{ type: "spring" }}
        >
            <div className="flex flex-col gap-3 justify-center">
                <h2 className="title_principal">Compartínos tus <span className="title_contrast">ideas</span></h2>
                <p className="description"></p>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
                <div className="flex flex-col justify-start place-items-start text-start lg:pr-10 gap-3">
                    <h5 className="font-nourd text-xl text-bluesd">¿Estás listo para dar el primer paso?</h5>
                    <p className="description">
                        Tu marca merece trabajar en las mejores manos. ¡Estaremos contentos de comenzar una nueva experiencia con vos!
                    </p>
                    <div className="flex flex-row gap-3 justify-start">
                        <span onClick={() => window.open(UrlFacebook, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <FaFacebook size={30} color='gray' />
                        </span>
                        <span onClick={() => window.open(UrlInstagram, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <FaInstagram size={30} color='gray' />
                        </span>
                        <span onClick={() => window.open(UrlWhatsapp, '_blank')} className=' rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <FaWhatsapp size={30} color='gray' />
                        </span>
                    </div>
                </div>
                <div className="flex">
                    <ContactForm />
                </div>
            </div>
        </motion.section>
    )
}
