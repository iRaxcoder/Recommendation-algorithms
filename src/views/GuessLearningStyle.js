import SectionHeader from "../components/Layout/SectionHeader";

const GuessLearningStyle = () => {
    const instructions = [
        "Para el correcto funcionamiento del algoritmo debe ingresar el recinto.",
        "Debe seccionar Su último promedio de matrícula y su sexo.",
        "El algoritmo puede no ser preciso."
     ];
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar estilo de aprendizaje" instructions={instructions}/>
            <hr/>
        </div>
    );
}

export default GuessLearningStyle;