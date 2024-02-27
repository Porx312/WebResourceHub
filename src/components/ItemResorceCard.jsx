import { useState } from "react"
import imxg from "../assets/fontawesome.png"
import useFetch from "../hooks/usefetch"
// eslint-disable-next-line react/prop-types
const ItemResorceCard = ({categ}) => {
  const [viewmore, setViewMore] = useState(false)
  const { todos} = useFetch(categ)

  return (
    <>
      <article id={categ} className="integration-topic-item integration-UiGrapighcs">
    <h2>{categ}</h2>
    <h3>gola</h3>
    <div className="itengration-topic-card">
    { todos.slice(0,(viewmore ? 45 : 6)).map((item) => (
    <div key={item.id} className="integration-topic-card-item">
    <div className="img-topic-card">
        <img src={imxg} alt="resources"/>
    </div>
    <h2>{item.nombre}</h2>
    <p>{item.titulo}</p>
</div>
   ))}
    </div>
    <button onClick={()=> setViewMore(!viewmore)} className="view-more-topic">view more</button>
</article>
   </>
  )
}

export default ItemResorceCard
