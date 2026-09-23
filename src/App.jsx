import { Formulario } from "./components/Formulario"
import { Navbar } from "./components/Navbar"


function App() {


  return (
    <>
      <Navbar/>
      <main className="container mx-auto">
        <Formulario/>
      </main>
    </>
  )
}

export default App
