import SectionHeader from "../components/Layout/SectionHeader";
const OriginPlace = () => {
    const instructions = [
       "Para utilizar este algoritmo correctamente debe seleccionar su estilo de aprendizaje (convergente,divergente, asimilador, acomodador).",
       "Debe seccionar Su último promedio de matrícula y su sexo.",
       "El algoritmo puede no ser preciso."
    ];
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar recinto de origen" instructions={instructions}/>
            <hr/>
        </div>
    );
}

export default OriginPlace;