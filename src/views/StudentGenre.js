import SectionHeader from "../components/Layout/SectionHeader";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import ResponseItem from "../components/ResponseItem";
const StudenGenre = () => {
    const { register, handleSubmit } = useForm();
    const instructions = [
        "Para utilizar este algoritmo correctamente debe seleccionar su estilo de aprendizaje (convergente,divergente, asimilador, acomodador).",
        "Debe seccionar Su último promedio de matrícula y recinto",
        "El algoritmo puede no ser preciso."
     ];
    const handleResults = () => {

    }
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar sexo de estudiante" instructions={instructions}/>
            <hr/>
            <form className="algorithm__form" noValidate onSubmit={handleSubmit(handleResults)}>
                <div className="form__item_group">
                    <div className="form__item">
                        <ResponseItem advanced={true} options={["Convergente","Divergente","Asimilador","Acomodador"]} register={register} name="1" type={" Estilo de aprendizaje"}/>
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

export default StudenGenre;