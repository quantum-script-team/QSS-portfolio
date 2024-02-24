  import Logo from "../../../public/img/Inicio/logo.png"
  import img from "../../../public/img/Inicio/img-inicio.png"
  import "./Header.css"
  
const Header = () => {
  return (
    <div className="container"> 
        <div className="header">
                <img src={Logo} className="image" alt="Logo" />
                
                    <ul className="nav">
                        <li><a className="menu__link" href="#">PROYECTOS</a></li>
                        <li><a className="menu__link" href="#">ACERCA DE QSS</a></li>
                        <li><a className="menu__link" href="#">CONTACTO</a></li>
                        
                    </ul>
                
                <button>INGRESAR</button>
        </div>
        
        
          
            <h1>QuantumScript Services</h1>
          <div className="description">
            
            <div className="info">
                <h3>Agencia de Desarrollo de Aplicaiones Web</h3>
                <p>Diseñamos y desarrollamos páginas web personalizadas que no solo impresionan visualmente, 
                  sino que tambien potencian tu presencia online generando oportunidades para tu negocio en el vasto mundo digital.</p>
                <button className="btn-desc">CONTACTANOS</button>
            </div>
            
            <img src={img} alt="img" className="pic" />
          
          </div>
    </div>
  );
};

export default Header
