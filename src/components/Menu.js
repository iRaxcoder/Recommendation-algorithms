import {Link} from "react-router-dom"
import "./../styles/Menu.css"

const Menu = () => (
    <div className="menu__container"> 
        <h1 className="menu__title">Algoritmos de recomendación</h1>
        <hr></hr>
        <nav className="menu__">
            <Link className="link" to="/invoices">Estilo de aprendizaje</Link> |{" "}
            <Link className="link" to="/expenses">Recinto de origen </Link> |{" "}
            <Link className="link" to="/expenses">Sexo de estudiante</Link> |{" "}
            <Link className="link" to="/expenses">Tipo de profesor</Link>|{" "}
            <Link className="link" to="/expenses">Clase de red</Link>
        </nav>
    </div>
)

export default Menu;