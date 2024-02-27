import Carruseltop from "./components/Carruseltop"
import Inicio from "./components/Inicio"
import ItemResorce from "./components/ItemResorce"
import Nav from "./components/Nav"
import NavElement from "./components/NavElement"


function App() {

  return (
    <main className="content">
      <Nav/>
    <Inicio/>
    <NavElement/>
    <Carruseltop/>
    <ItemResorce/>
    <footer className="footer">
        <p>casi todos los derechos reservados a Jose Blanco, inspiration <a href="https://linear.app/integrations#collaboration">Linear</a></p>
        <p>2024</p>
    </footer>
</main>
  )
}

export default App
