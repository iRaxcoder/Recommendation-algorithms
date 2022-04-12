import SectionHeader from "../components/Layout/SectionHeader";
const ProfessorType = () => {
    const instructions = [
        "Usted como prefesor, con el fin de determinar si es principiante, intermedio o avanzado...",
        "Deberá responder a los criterios mostrados en la interfaz.",
        "El algoritmo puede no ser preciso."
     ];
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar tipo de profesor" instructions={instructions}/>
            <hr/>
        </div>
    );
}

export default ProfessorType;