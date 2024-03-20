import sol from "../assets/brightness.png"
import { useState } from "react";
const Favorite = () => {
 
  const [dataFavorite, setDataFavorite] = useState(() => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : [];
});

const deleteItem = (id) => {
    const updatedData = dataFavorite.filter(item => item.id !== id);
    setDataFavorite(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
};

  return (
    <>
     <div className="searchContent">
                <div className="search-content">
                    <label id="search"><i className="bi bi-search text-light"></i></label>
                <input type="text" id="search"/>
                </div>
                <button><img src={sol} alt="icon"/></button>
            </div>
            <article className="content-section-article">
                <div className="text">
                 
                    <div className="content-card">

                    {dataFavorite ? dataFavorite.map(item =>  <div key={item.id} className="card-resource">
                            <h2>{item.nombre}</h2>
                            <h3>{item.titulo}</h3>
                            <button className="favorite" onClick={()=> deleteItem(item.id)}> <i   className="lfavorite-icon bi bi-star-fill"></i></button>
                            <button className="link"><i className="bi bi-link"></i></button>
                        </div>) : <h2>no tiene datos</h2>} 
                        
                    </div>
                </div>
            </article>
    </>
  )
}

export default Favorite
