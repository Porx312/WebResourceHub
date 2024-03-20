import { useEffect, useState } from "react"
import sol from "../assets/brightness.png"
import useFetch from "../hooks/usefetch"
const Home = () => {
    const [category, setCategory] = useState("Colors")
    const {todos} = useFetch(category)
    const [dataFavorite, setDataFavorite] = useState([])
    useEffect(() => {
        // Cargar datos favoritos desde localStorage al montar el componente
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setDataFavorite(JSON.parse(storedData));
        }
    }, []);
    useEffect(() => {
        // Verificar si hay datos favoritos antes de guardar en localStorage
        if (dataFavorite.length !== 0) {
            localStorage.setItem('data', JSON.stringify(dataFavorite)); // Convertir a JSON antes de guardar
        }
    }, [dataFavorite]);


    const actualizarData = (id) => {
        const existingItem = dataFavorite.find(item => item.id === id);
    
        if (!existingItem) {
            const newItem = todos.find(item => item.id === id);
            if (newItem) {
                setDataFavorite(prevDataFavorite => {
                    const newDataFavorite = [...prevDataFavorite, newItem];
                    localStorage.setItem('data', JSON.stringify(newDataFavorite)); // Guardar en localStorage
                
                    return newDataFavorite;

                });
            } else {
                console.log("No se encontró ningún elemento con el ID especificado en 'todos'.");
            }
        } else {
            console.log("El objeto con el ID especificado ya existe en 'dataFavorite'.");
        }
    };
  return (
    <>
     <div className="searchContent">
                <div className="search-content">
                    <button className="search" id="search"><i className="bi bi-search text-light"></i></button>
                <input type="text" id="search"/>
                </div>
                <button><img src={sol} alt="icon"/></button>
            </div>
            <article className="content-section-article">
                <div className="text">
                    <div className="filter">
                        <h2>{category}</h2>
                        <div className="menu-resource">
                            <ul>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="Colors">Colors</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="UIGraphics">Ui Graphich</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="Fonts">Font</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="Icons"></button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="Logos">Logos</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="Favicons">Favicons</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="IconFonts">Icon Fonts</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="StockPhotos">Stock Photos</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="StockVideos">Stock Videos</button></li>
                                <li><button onClick={(e)=> setCategory(e.target.value)} value="">Stock Music</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-card">

                       {todos.map(item =>  <div key={item.id} className="card-resource">
                            <h2>{item.nombre}</h2>
                            <h3>{item.titulo}</h3>
                           <button onClick={()=> {actualizarData(item.id)}}  className="favorite"> <i  className=" bi bi-star"></i> </button>
                            <button className="link"><i className=" bi bi-link"></i></button>
                        </div>)}
                        
                    </div>
                </div>
            </article>
    </>
  )
}

export default Home