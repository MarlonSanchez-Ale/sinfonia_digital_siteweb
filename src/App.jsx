
import './App.css'
import EntrancePage from './components/module/EntracePage/EntracePage'
import HomeSD from './components/module/home/HomeSD'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
function App() {

  const [showEntrace, setShowEntrace] = useState(true)
  // Esto podría ser un temporizador o cualquier otro mecanismo para controlar cuándo ocultar la página de entrada
  useEffect(() => {
    setTimeout(() => {
      setShowEntrace(false);
    }, 3000); // Por ejemplo, ocultar después de 3 segundos
  }, []);

  useEffect(() => {
    // Bloquear el desplazamiento horizontal en dispositivos móviles
    document.body.style.overflowX = 'hidden';
    // Limpiar el bloqueo al desmontar el componente
    return () => {
      document.body.style.overflowX = 'visible';
    };
  }, []);

  return (
    <>
      <motion.div
        className="page"
        initial={{ x: "0%" }}
        animate={{ x: showEntrace ? 0 : '-100%' }}
        exit={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EntrancePage />
      </motion.div>
      <motion.div
        className="page"
        initial={{ x: '100%' }}
        animate={{ x: showEntrace ? '100%' : 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomeSD />
      </motion.div>

    </>

  )
}

export default App

