import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../../elements/ContactForm/ContactForm";

export default function Contact() {

    const UrlFacebook = "https://www.facebook.com/profile.php?id=61557617054786 "
    const UrlInstagram = "https://www.instagram.com/sinfoniadigitalni/ "
    const UrlWhatsapp = "https://wa.link/k7p4p9"

    return (
        <section id="contact" className="flex flex-col gap-10 justify-center min-h-[90vh] my-30">
            <div className="flex flex-col gap-3 justify-center">
                <h2 className="title_principal">Compartinos tus <span className="title_contrast">ideas</span></h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 mt-10">
                <div className="flex flex-col sm:order-last md:order-first justify-start text-start gap-3">
                    <h5 className=" font-nourd text-xl text-bluesd">Estamos listos para  iniciar con la creatividad</h5>
                    <p className="description">
                        Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        sit amet Imperdiet Lorem ipsum dolor sit amet consectetur sit amet . Imperdiet Lorem ipsum dolor
                        sit amet consectetur
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
        </section>
    )
}