import { motion } from "framer-motion"

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

const fadeInAnimationVariants2 = {
    initial: {
        opacity: 0,
        x: -20,
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

export default function Services() {
    return (
        <section id="services" className="flex flex-col gap-10 justify-center min-h-[90vh] sm:px-5 lg:px-0 ">
            <div className="flex flex-col gap-3 justify-center">
                <h2 className="title_principal">Nuestros <span className="title_contrast">servcios</span></h2>
                <p className="description">¡Llevá a tu marca al siguiente nivel con nosotros!</p>
            </div>
            <div className="flex flex-col sm:gap-20 md:gap-10 mt-10">
                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:place-items-center"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    layoutScroll
                    exit={{ x: 0 }}
                    transition={{ type: "spring" }}>
                    <div className="flex sm:flex-col md:flex-row sm:place-items-start md:place-items-center sm:text-start gap-5 ">
                        <span className=' rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">01</p>
                        </span>
                        <span className=" text-gray-400 text-center">- - - - - - - - - - - - - - - -</span>
                    </div>
                    <div className="flex flex-col justify-center place-items-start gap-2 text-start">
                        <h3 className=" font-nourd text-bluesd text-xl">Redes sociales</h3>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Administración de redes sociales.
                        </p>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Fotografía.
                        </p>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Video.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 "
                    variants={fadeInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    layoutScroll
                    exit={{ x: 0 }}
                    transition={{ type: "spring" }}
                >
                    <div className="flex flex-col md:pl-12 lg:pl-56 sm:order-last md:order-first gap-2 text-start">
                        <div className="">
                            <h3 className=" font-nourd text-bluesd text-xl">Diseño</h3>
                            <p className="description">
                                <span className="text-yellowsd mr-3">✔</span>
                                Libro de marca.
                            </p>
                            <p className="description">
                                <span className="text-yellowsd mr-3">✔</span>
                                Logo.
                            </p><p className="description">
                                <span className="text-yellowsd mr-3">✔</span>
                                Branding.
                            </p>
                        </div>
                    </div>
                    <div className="flex sm:order-first md:order-last sm:flex-col md:flex-row sm:place-items-end md:place-items-center justify-center sm:text-start gap-5 ">
                        <span className=" text-gray-400 sm:order-last md:order-first">- - - - - - - - - - - - - - - -</span>
                        <span className=' sm:order-first md:order-last rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">02</p>
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:place-items-center"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    layoutScroll
                    exit={{ x: 0 }}
                    transition={{ type: "spring" }}
                >
                    <div className="flex sm:flex-col md:flex-row sm:place-items-start md:place-items-center sm:text-start gap-5 ">
                        <span className='rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">03</p>
                        </span>
                        <span className=" text-gray-400 text-center">- - - - - - - - - - - - - - - -</span>
                    </div>
                    <div className="flex flex-col justify-center place-items-start gap-2 text-start">
                        <h3 className=" font-nourd text-bluesd text-xl">Estrategias</h3>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Campañas publicitarias.
                        </p>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Asesoría en mercadeo y comunicación.
                        </p>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Estrategia de marca.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:place-items-center"
                    variants={fadeInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    layoutScroll
                    exit={{ x: 0 }}
                    transition={{ type: "spring" }}>
                    <div className="flex flex-col sm:order-last md:order-first md:justify-center gap-2 text-start ">
                        <h3 className=" font-nourd text-bluesd text-xl">Desarrollo Web</h3>
                        <p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Sitios web.
                        </p><p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Landing pages.
                        </p><p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Menú digital.
                        </p><p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Actualización de sitios web.
                        </p><p className="description">
                            <span className="text-yellowsd mr-3">✔</span>
                            Copywriting personalizado.
                        </p>
                    </div>
                    <div className="flex sm:order-first md:order-last sm:flex-col md:flex-row sm:place-items-end md:place-items-center justify-center sm:text-start gap-5 ">
                        <span className=" text-gray-400 sm:order-last md:order-first">- - - - - - - - - - - - - - - -</span>
                        <span className=' sm:order-first md:order-last rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">04</p>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
