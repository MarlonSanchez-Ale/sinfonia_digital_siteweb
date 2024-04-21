import { Input } from "@material-tailwind/react";
import { Select, Option, Textarea, Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const schema = yup
    .object({
        user_name: yup.string('Nombre de usuario no valido.').required('Ingrese su nombre').matches(
            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            "Enter valid first name !"
        ),
        user_subject: yup.string().required('Ingrese asunto del mensaje'),
        user_email: yup.string().email('Email, invalido').required('Ingrese su correo'),
        cellphone: yup.string().required('Ingrese su número telefónico'),
        message: yup.string().required('Ingrese su mensaje')
    })
    .required()

export default function ContactForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const service_contact = import.meta.env.VITE_SERVICE_KEY
    const template_contact = import.meta.env.VITE_TEMPLATE_KEY
    const publiyKey_contact = import.meta.env.VITE_PUBLIC_KEY

   
    const onSubmit = () => {
        //console.log(data)
        emailjs
            .sendForm(service_contact, template_contact, 'form', { publicKey: publiyKey_contact })
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Gracias por tu mensaje!",
                    text: `Te responderemos lo antes posible. 
                         ¡Que tengas un gran día!"`,
                    showConfirmButton: true,
                });
                reset()
            },
                (error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error de envío",
                        text: error.text,
                        showConfirmButton: true,
                    });
                },
            );
    }

    const handlePhoneBlur = (value) => {
        setValue('cellphone', value);
    };

  

    return (
        <div className="grid place-items-center w-full p-5 gap-5 bg-white rounded-md shadow-md">
            <div className="flex flex-col gap-1 justify-center">
                <h5 className=" font-nourd text-lg text-bluesd">Envíanos tu mensaje</h5>
                <p className="description">
                    Nos pondremos en contacto con vos a  la brevedad  posible
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-3">
                <div className="flex sm:flex-col md:flex-row justify-center gap-5">
                    <div className="w-full">
                        <Input color="gray" label="Nombre" {...register('user_name')} />
                        <p className=" text-sm text-red-600">{errors.user_name?.message}</p>
                    </div>
                    <div className="w-full">
                    <Select
                            label="Asunto"
                            className="text-start"
                            onChange={(val) => setValue("user_subject", val)}
                        >
                            <Option value="Redes sociales" className="text-start">Redes sociales</Option>
                            <Option value="Diseño" className="text-start">Diseño</Option>
                            <Option value="Estrategias" className="text-start">Estrategias</Option>
                            <Option value="Desarrollo web" className="text-start">Desarrollo web</Option>
                        </Select>
                        <p>{errors.user_subject?.message}</p>
                    </div>
                </div>
                <div className="flex sm:flex-col md:flex-row justify-center gap-5">
                    <div className="w-full">
                        <Input
                            label="Correo electrónico"
                            type="email"
                            {...register('user_email')}
                        />
                        <p>{errors.user_email?.message}</p>
                    </div>
                    <div className="w-full">
                        <Controller
                            name="cellphone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    country="ni"
                                    inputProps={{
                                        name: 'cellphone',
                                        required: true,
                                        onBlur: (e) => handlePhoneBlur(e.target.value)
                                    }}
                                    placeholder="Número telefonico"
                                    inputStyle={{
                                        width: "100%"
                                    }}
                                />
                            )}
                        />
                        <p>{errors.cellphone?.message}</p>
                    </div>
                </div>
                <Textarea label="Mensaje" {...register('message')} />
                <Button size="lg" type="submit" className=" bg-yellowsd">Enviar mensaje</Button>
            </form>
        </div>

    )
}
