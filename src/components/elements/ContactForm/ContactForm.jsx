import { Input } from "@material-tailwind/react";
import { Select, Option, Textarea, Button } from "@material-tailwind/react";

export default function ContactForm() {
    return (
        <div className="grid place-items-center w-full p-5 gap-5 bg-white rounded-md shadow-md">
            <div className="flex flex-col gap-1 justify-center">
                <h5 className=" font-nourd text-lg text-bluesd">Envíanos tu mensaje</h5>
                <p className="description">
                    Nos contactamos con vos en minutos
                </p>
            </div>
            <form className="flex flex-col w-full gap-3">
                <div className="flex sm:flex-col md:flex-row justify-center gap-5">
                    <Input color="gray" label="Nombre" />
                    <Select label="Asunto">
                        <Option>Redes sociales</Option>
                        <Option>Posicionamiento de marca</Option>
                        <Option>Branding</Option>
                        <Option>Sitios web</Option>
                    </Select>
                </div>
                <div className="flex sm:flex-col md:flex-row justify-center gap-5">
                    <Input color="gray" label="Correo" />
                    <Input color="gray" label="Nombre" />
                </div>
                <Textarea label="Tu mensaje aquí" />
                <Button size="lg" type="submit" className=" bg-yellowsd">Enviar mensaje</Button>
            </form>
        </div>

    )
}
