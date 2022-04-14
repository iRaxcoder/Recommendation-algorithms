import SectionHeader from "../components/Layout/SectionHeader";
import ResponseItem from "../components/ResponseItem";
import { useForm } from "react-hook-form";
import "../styles/ProfessorType.css";
import CalcButton from '../components/CalcButton';

const ProfessorType = () => {
    const instructions = [
        "Usted como prefesor, con el fin de determinar si es principiante, intermedio o avanzado...",
        "Deberá responder a los criterios mostrados en la interfaz.",
        "El algoritmo puede no ser preciso."
     ];
     const { register, handleSubmit } = useForm();
     const handleResults = () => {

    }
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar tipo de profesor" instructions={instructions}/>
            <hr/>
            <form noValidate onSubmit={handleSubmit(handleResults)}>
                <div className='response__container'>
                        <div className='style__container'>
                                <ResponseItem advanced={true} options={["<=30",">30 y <=55",">55"]} register={register} name="1" type={"Edad "}/>
                                <ResponseItem advanced={true} options={["Femenino","Masculino","NA"]} register={register} name="2" type={"Género"}/>
                                <ResponseItem advanced={true} options={["Principiante","Medio","Avanzado"]} register={register} name="3" type={"Autoevaluación de habilidad o exp"}/>
                                <ResponseItem advanced={true} options={["Nunca","1 a 5 veces","Más de 5 veces"]} register={register} name="4" type={"Número de veces de involucrado en el curso"}/>
                        </div>
                        <div className='style__container'>
                                <ResponseItem advanced={true} options={["Tomador de decisiones","Network design","Other"]} register={register} name="5" type={"Enfoque de disciplina o area experta"}/>
                                <ResponseItem advanced={true} options={["Baja","Promedio","Alta"]} register={register} name="6" type={"Habilidad con el computador"}/>
                                <ResponseItem advanced={true} options={["Nunca","A veces","A menudo"]} register={register} name="7" type={"Experiencia enseñando con tecnología web"}/>   
                                <ResponseItem advanced={true} options={["Nunca","A veces","A menudo"]} register={register} name="8" type={"Experiencia en uso de sitios web"}/>   
                        </div>
                </div>
                <CalcButton/>
            </form>
        </div>
    );
}

export default ProfessorType;