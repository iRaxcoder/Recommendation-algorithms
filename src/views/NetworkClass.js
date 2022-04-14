import SectionHeader from "../components/Layout/SectionHeader";
import CalcButton from '../components/CalcButton';
import { useForm } from "react-hook-form";
import ResponseItem from "../components/ResponseItem";

const NetworkClass = () => {
    const instructions = [
        "Con el fin de poder clasificar la clase de red (A o B), se encuentra el presente algoritmo.",
        "Debe responder a los criterios de fiabilidad, número de links, capacidad de red (Baja, media o alta)."
        ,"Por último seleccionar el costo de la red (bajo, medio, alto)."
     ];
     const { register, handleSubmit } = useForm();
     const handleResults = () => {

    }
    return (
        <div className="container__">
            <SectionHeader title= "Adivinar clase de red" instructions={instructions}/>
            <hr/>
            <form className="algorithm__form" noValidate onSubmit={handleSubmit(handleResults)}>
                <div className="form__item_group">
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["2","3","4","5"]} register={register} name="1" type={" Fiabilidad"}/>
                    </div>
                    <div className="form__item">
                        <label>Número de links: </label>
                        <input {...register("range")} type={"number"} min={7} max={20}></input>
                    </div>
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["Baja","Media","Alta"]} register={register} name="2" type={" Capacidad"}/>
                    </div>
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["Baja","Media","Alta"]} register={register} name="3" type={" Costo de red"}/>
                    </div>
                </div>
                <CalcButton/>
            </form>
        </div>
    );
}

export default NetworkClass;