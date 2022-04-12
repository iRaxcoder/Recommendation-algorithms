import SectionHeader from "../components/Layout/SectionHeader";

const StudenGenre = () => {
    const instructions = [
        "Para utilizar este algoritmo correctamente debe seleccionar su estilo de aprendizaje (convergente,divergente, asimilador, acomodador).",
        "Debe seccionar Su último promedio de matrícula y recinto",
        "El algoritmo puede no ser preciso."
     ];
    
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar sexo de estudiante" instructions={instructions}/>
            <hr/>
        </div>
    );
}

export default StudenGenre;