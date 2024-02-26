import Carruseltop from "./components/Carruseltop"
import Inicio from "./components/Inicio"
import ItemResorce from "./components/ItemResorce"
import Nav from "./components/Nav"


function App() {

  return (
    <main className="content">
      <Nav/>
    <Inicio/>
    <section className="nav-recurses">
        <nav>
            <button className="btn-search"></button>
            <ul>
                <li><a href="#">Ui Graphics</a></li>
                <li><a href="#">Fonts</a></li>
                <li><a href="#">Colors</a></li>
                <li><a href="#">Logos</a></li>
                <li><a href="#">Favicons</a></li>
                <li><a href="#">Favicons</a></li>
                <li><a href="#">Icon Fonts</a></li>
                <li><a href="#">Stock Photos</a></li>
                <li><a href="#">Stock Photos</a></li>
            </ul>
            <div className="btn-carrusel-nav">
                <button>c</button>
                <button>o</button>
            </div>
        </nav>
    </section>
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
