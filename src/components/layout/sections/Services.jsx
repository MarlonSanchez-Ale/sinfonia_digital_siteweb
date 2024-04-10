

export default function Services() {
    return (
        <section id="services" className="flex flex-col gap-10 justify-center min-h-[90vh]  my-40">
            <div className="flex flex-col gap-3 justify-center">
                <h2 className="title_principal">Nuestros <span className="title_contrast">Servcios</span></h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
            </div>
            <div className="flex flex-col gap-20 mt-10">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:place-items-center">
                    <div className="flex sm:flex-col md:flex-row sm:place-items-start md:place-items-center sm:text-start gap-5 ">
                        <span className=' rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">01</p>
                        </span>
                        <span className=" text-gray-400 text-center">- - - - - - - - - - - - - - - -</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-start px-5">
                        <h5 className=" font-nourd text-bluesd text-xl">Redes Sociales</h5>
                        <p className="description">
                            Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet .
                            Imperdiet Lorem ipsum dolor sit amet consectetur sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="flex flex-col sm:order-last md:order-first justify-center gap-2 text-start px-5">
                        <h5 className=" font-nourd text-bluesd text-xl">Feed planning</h5>
                        <p className="description">
                            Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet .
                            Imperdiet Lorem ipsum dolor sit amet consectetur sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                    <div className="flex sm:order-first md:order-last sm:flex-col md:flex-row sm:place-items-end md:place-items-center justify-center sm:text-start gap-5 ">
                        <span className=" text-gray-400 sm:order-last md:order-first">- - - - - - - - - - - - - - - -</span>
                        <span className=' sm:order-first md:order-last rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">02</p>
                        </span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:place-items-center">
                    <div className="flex sm:flex-col md:flex-row sm:place-items-start md:place-items-center sm:text-start gap-5 ">
                        <span className=' rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">03</p>
                        </span>
                        <span className=" text-gray-400 text-center">- - - - - - - - - - - - - - - -</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-start px-5">
                        <h5 className=" font-nourd text-bluesd text-xl">Posicionamiento de marca</h5>
                        <p className="description">
                            Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet .
                            Imperdiet Lorem ipsum dolor sit amet consectetur sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="flex flex-col sm:order-last md:order-first justify-center gap-2 text-start px-5">
                        <h5 className=" font-nourd text-bluesd text-xl">Desarrollo Web</h5>
                        <p className="description">
                            Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet .
                            Imperdiet Lorem ipsum dolor sit amet consectetur sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                    <div className="flex sm:order-first md:order-last sm:flex-col md:flex-row sm:place-items-end md:place-items-center justify-center sm:text-start gap-5 ">
                        <span className=" text-gray-400 sm:order-last md:order-first">- - - - - - - - - - - - - - - -</span>
                        <span className=' sm:order-first md:order-last rounded-full border border-gray-900/5 bg-yellowsd p-3 shadow-md text-graysd transition-colors hover:border-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <p className=" font-nourd text-5xl bg-yellow-800 rounded-full p-3 text-center text-graysd">04</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
