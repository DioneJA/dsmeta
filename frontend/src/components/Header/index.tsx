import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return(
    <>
   <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta web application logo"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.instagram.com/bruno_dione/?hl=pt-br"
                    target="_blank">@bruno_dione</a></p>
        </div>
    </header>
    </>
  )
}

export default Header
