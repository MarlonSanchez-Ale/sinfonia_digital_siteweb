
import './App.css'
import HomeSD from './components/module/home/HomeSD'
import Aboutus from './components/layout/sections/Aboutus'
import Services from './components/layout/sections/Services'
import Contact from './components/layout/sections/Contact'
import FormatLayout from './components/layout/FormatLayout/FormatLayout'

function App() {

  return (
    <FormatLayout>
      <HomeSD />
      <Aboutus />
      <Services />
      <Contact />
    </FormatLayout>
  )
}

export default App

