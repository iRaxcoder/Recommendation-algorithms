import { useState } from "react"
import {Link} from "react-router-dom"
import "../../styles/Menu.css"

const Menu = () => {
    const [menuMainClass,setMenuMainClass] = useState("menu__ ");
    const [isVisibleToggle,setIsVisibleToggle] = useState("");
    const onToggleAction = () => {
        isVisibleToggle.length===0?
        setIsVisibleToggle("menu__visible")
        :
        setIsVisibleToggle("");
    }
    return (
    <div className="menu__container"> 
        <h1 className="menu__title">Algoritmos de recomendación</h1>
        <button onClick={onToggleAction} className="menu__toggle"></button>
        <hr></hr>
        <nav className={menuMainClass+isVisibleToggle}>
            <Link className="link" to="/learning-style">Estilo de aprendizaje</Link>{" "}
            <Link className="link" to="/origin-place">Recinto de origen </Link>{" "}
            <Link className="link" to="/student-genre">Sexo de estudiante</Link>{" "}
            <Link className="link" to="/guess-learning-style">Ad. Estilo de aprendizaje </Link>{" "}
            <Link className="link" to="/professor-type">Tipo de profesor</Link>{" "}
            <Link className="link" to="/network-class">Clase de red</Link>
        </nav>
    </div>
    );
}

export default Menu;