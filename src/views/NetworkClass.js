import SectionHeader from "../components/Layout/SectionHeader";

const NetworkClass = () => {
    const instructions = [
        "Con el fin de poder clasificar la clase de red (A o B), se encuentra el presente algoritmo.",
        "Debe responder a los criterios de fiabilidad, número de links, capacidad de red (Baja, media o alta)."
        ,"Por último seleccionar el costo de la red (bajo, medio, alto)."
     ];
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar clase de red" instructions={instructions}/>
            <hr/>
        </div>
    );
}

export default NetworkClass;