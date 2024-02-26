import resource from "../assets/resources.png"
const Inicio = () => {
  return (
    <section className="Home home-integration">
       <img src={resource} alt="resoruce" />
        <div className="home-item">
            <h2>Resources</h2>
            <h3>Welcome to WebResourceHub!</h3>
            <p> Your go-to destination for a wide range of online resources. Explore, discover, and enhance your web projects with our curated collection. Join our digital creator community today!</p>
        </div>
    </section>
  )
}

export default Inicio
