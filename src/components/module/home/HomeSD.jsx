
import Hero from "../../layout/sections/Hero"
import Aboutus from '../../layout/sections/Aboutus'
import Services from '../../layout/sections/Services'
import Contact from '../../layout/sections/Contact'
import FormatLayout from '../../layout/FormatLayout/FormatLayout'

export default function HomeSD() {
    return (
        <FormatLayout>
            <Hero />
            <Aboutus />
            <Services />
            <Contact />
        </FormatLayout>
    )
}
