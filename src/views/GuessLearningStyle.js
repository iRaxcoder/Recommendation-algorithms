import SectionHeader from "../components/Layout/SectionHeader";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import ResponseItem from "../components/ResponseItem";

const GuessLearningStyle = () => {
    const { register, handleSubmit } = useForm();
    const instructions = [
        "Para el correcto funcionamiento del algoritmo debe ingresar el recinto.",
        "Debe seccionar Su último promedio de matrícula y su sexo.",
        "El algoritmo puede no ser preciso."
     ];
    const handleResults = () => {

    }
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar estilo de aprendizaje" instructions={instructions}/>
            <hr/>
            <form className="algorithm__form" noValidate onSubmit={handleSubmit(handleResults)}>
                <div className="form__item_group">
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["Masculino","Femenino"]} register={register} name="1" type={" Sexo"}/>
                    </div>
                    <div className="form__item">
                        <label>Prom. Matricula: </label>
                        <input {...register("prom")} type={"number"}></input>
                    </div>
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["Turrialba","Paraíso","Guápiles"]} register={register} name="1" type={" Recinto"}/>
                    </div>
                </div>
                <CalcButton/>
            </form>
        </div>
    );
}

export default GuessLearningStyle;