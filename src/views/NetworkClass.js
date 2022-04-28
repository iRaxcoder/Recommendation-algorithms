import SectionHeader from "../components/Layout/SectionHeader";
import CalcButton from '../components/CalcButton';
import { useForm } from "react-hook-form";
import ResponseItem from "../components/ResponseItem";
import exercise from "../service/exercise";
import { useState } from "react";
import Loader from "../components/Layout/Loader";
const NetworkClass = () => {
    const instructions = [
        "Con el fin de poder clasificar la clase de red (A o B), se encuentra el presente algoritmo.",
        "Debe responder a los criterios de fiabilidad, número de links, capacidad de red (Baja, media o alta)."
        ,"Por último seleccionar el costo de la red (bajo, medio, alto)."
     ];
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [isLoading, setIsloading] = useState(false);
     const [result, setResult]=useState(null);
     const handleResults = (data) => {
        setIsloading(true);
        exercise.getClassType(data).then(response=>{
            setResult(response);
        });
        setIsloading(false);
    }
    return (
        <div className="container__">
            <SectionHeader instructionTitle="Adivinar clase de red" title= "Adivinar clase de red" instructions={instructions}/>
            <hr/>
            <form className="algorithm__form" noValidate onSubmit={handleSubmit(handleResults)}>
                <div className="form__item_group">
                    <div className="form__item">
                    <ResponseItem val={["2","3","4","5"]} advanced={true} options={["2","3","4","5"]} register={register} name="reliability" type={" Fiabilidad"}/>
                    </div>
                    <div className="form__item">
                        <label>Número de links: </label>
                        <input {...register("range",{ required: errors ?true:false })} type={"number"} min={7} max={20}></input>
                        {
                            errors?
                                errors["range"] && <p style={{color:"red", fontSize:"15px"}}>{"*ingrese links"}</p>
                            :
                            <></>
                        }
                    </div>
                    <div className="form__item">
                    <ResponseItem val={["Low","Medium","High"]} advanced={true} options={["Baja","Media","Alta"]} register={register} name="capacity" type={" Capacidad"}/>
                    </div>
                    <div className="form__item">
                    <ResponseItem val={["Low","Medium","High"]} advanced={true} options={["Baja","Media","Alta"]} register={register} name="cost" type={" Costo de red"}/>
                    </div>
                </div>
                <CalcButton/>
            </form>
            {
                isLoading===true?
                    <Loader/>
                :
                    <></>
            }
            {
                result?
                        <div className="result__">
                                <p>¡La clase de red es: {result}!</p>
                        </div>
                    :
                        <></>
            }
        </div>
    );
}

export default NetworkClass;