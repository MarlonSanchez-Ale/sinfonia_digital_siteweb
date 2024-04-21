import iconoSd from '../../../assets/img/icono.png'
import { motion, MotionConfig } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 0,
    },
    animate: {
        opacity: 1,
        y: 20,

    }
}

const EntrancePage = () => {
    return (
        <MotionConfig transition={{ duration: 1 }}>
            <motion.section
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                exit={{ x: 0 }}
                transition={{ type: "spring", delay: 1 }}
            >
                <div className="flex flex-col gap-10 place-items-center justify-center h-screen ">
                    <motion.img animate={{ rotate: 360, scale: [1, 2, 1] }} transition={{ duration: 1, repeat: 1 }} src={iconoSd} className='w-24 h-24 text-bluesd' />
                    <h1 className="text-6xl font-bold font-nourd text-bluesd">Sinfonía <span className='text-yellowsd'>Digital</span></h1>
                </div>
            </motion.section>
        </MotionConfig>

    );
};

export default EntrancePage;

