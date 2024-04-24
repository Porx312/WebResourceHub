import { useState } from "react";
import useFetch from "../hooks/usefetch";

const Home = () => {
    const [category, setCategory] = useState("Colors");
    const { todos } = useFetch(category);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

 

    return (
        <article className="content-section-article">
            <div className="text">
                <div className="filter">
                    <h2 className="category">{category}</h2>
                    <div className="menu-resource">
                        <ul>
                            <li><button onClick={() => handleCategoryChange("Colors")}>Colors</button></li>
                            <li><button onClick={() => handleCategoryChange("UIGraphics")}>UI Graphics</button></li>
                            <li><button onClick={() => handleCategoryChange("Fonts")}>Font</button></li>
                            <li><button onClick={() => handleCategoryChange("Icon")}>Icons</button></li>
                            <li><button onClick={() => handleCategoryChange("Logos")}>Logos</button></li>
                            <li><button onClick={() => handleCategoryChange("Favicons")}>Favicons</button></li>
                            <li><button onClick={() => handleCategoryChange("IconFonts")}>Icon Fonts</button></li>
                            <li><button onClick={() => handleCategoryChange("StockPhotos")}>Stock Photos</button></li>
                            <li><button onClick={() => handleCategoryChange("StockVideos")}>Stock Videos</button></li>
                        </ul>
                    </div>
                </div>
                <div className="content-card">
                    <div className="content-item">
                    {todos.map(item => (
                        <div key={item.id} className="card-resource">
                            <img src={item.img} alt="img" />
                            <h2>{item.name}</h2>
                            <a href={item.url} target="_blank" className="link">
                                <i className="bi bi-link"></i>
                            </a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Home;
