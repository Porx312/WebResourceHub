import "./donate.css"
import share from "../assets/share91.png"
import binance from "../assets/binance.svg"
import sol from "../assets/brightness.png"

import { useState } from "react"
const Donate = () => {
  const [copied, setCopied] = useState(false);

  // Función para copiar texto al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Éxito al copiar
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000); // Reinicia el estado después de 2 segundos
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
      });
  };
  return (
    <>
   
    <div className="searchContent">
    <button><img src={sol} alt="icon"/></button>
    </div>
           <article className="content-section-article binance-content">
            
            <h2 className="donate-text">Welcome to our Donation Section!</h2>
            <h3 className="donate-text-h3">We believe in the power of community support and the strength it brings to our mission. Your generous contributions help us maintain and improve our website, ensuring that we continue to provide valuable resources to our users. Whether you are an individual or a corporation, your donation makes a difference.</h3>
            <img className="binance" src={binance} alt="binance" />
         <div className="content-card-donate">
         <img className="share" src={share} alt="share" />
          
         </div>
         <div className="donatecopy">
           <h2>{copied  ? "copied text!" : "0x84b394cb8e5d9791f650233648293ab3587fed1a"}</h2>
           <button onClick={()=> copyToClipboard(">0x84b394cb8e5d9791f650233648293ab3587fed1a")} >  <i className="fa-regular fa-copy" style={{color:"white"}} ></i></button>
           </div>
           </article>
   </>
  )
}

export default Donate