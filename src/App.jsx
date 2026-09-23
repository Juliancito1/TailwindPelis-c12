import { Formulario } from "./components/Formulario"
import { GridPelis } from "./components/GridPelis"
import { Navbar } from "./components/Navbar"


function App() {


  return (
    <>
      <Navbar/>
      <main className="container mx-auto">
        <Formulario/>
        <GridPelis/>
      </main>
    </>
  )
}

export default App
