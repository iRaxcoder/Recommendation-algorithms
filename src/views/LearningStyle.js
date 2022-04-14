import ResponseItem from '../components/ResponseItem';
import { useState } from 'react';
import CalcButton from '../components/CalcButton';
import { useForm } from "react-hook-form";
import exercise from '../service/exercise';
import SectionHeader from '../components/Layout/SectionHeader';

const LearningStyle = () => {
   const instructions = [
       "Para utilizar el instrumento usted debe conceder una calificación alta a aquellas palabras que mejor caracterizan la forma en que usted aprende, y una calificación baja a las palabras que menos caracterizan su estilo de aprendizaje.",
       "Le puede ser difícil seleccionar las palabras que mejor describen su estilo de aprendizaje, ya que no hay respuestas correctas o incorrectas.",
       "Todas las respuestas son buenas, ya que el fin del instrumento es describir cómo y no juzgar su habilidad para aprender.",
       "De inmediato encontrará nueve series o líneas de cuatro palabras cada una. Ordene de mayor a menor cada serie o juego de cuatro palabras que hay en cada línea, ubicando 4 en la palabra que mejor caracteriza su estilo de aprendizaje, un 3 en la palabra siguiente en cuanto a la correspondencia con su estilo; a la siguiente un 2, y un 1 a la palabra que menos caracteriza su estilo. Tenga cuidado de ubicar un número distinto al lado de cada palabra en la misma línea."
   ];
   const [result, setResult]=useState(null);
   const [styles, setStyles]=useState({ea:0,ec:0,or:0,ca:0});
   const { register, handleSubmit } = useForm();
   const handleResults = (d) => {
    setStyles({
        ec:parseInt(d["2"]) + parseInt(d["3"]) + parseInt(["4"]) + parseInt(["5"]) + parseInt(["7"]) + parseInt(["8"]),
        or: parseInt(d["10"]) + parseInt(d["12"]) + parseInt(["12"]) + parseInt(["16"]) + parseInt(["17"]) + parseInt(["18"]),
        ca:parseInt(d["20"]) + parseInt(d["21"]) + parseInt(["22"]) + parseInt(["23"]) + parseInt(["26"]) + parseInt(["27"]),
        ea:parseInt(d["28"]) + parseInt(d["30"]) + parseInt(["6"]) + parseInt(["7"]) + parseInt(["8"]) + parseInt(["9"])});

//     console.log("Valor de ec: "+ ec + " Valor de or: "+ or + " Valor de ca: "+ ca + " Valor de ea: "+ ea);
    exercise.getLearningStyle({ec:styles.ec,or:styles.or,ca:styles.ca,ea:styles.ea}).then(response=>{
        setResult(response);
      });
   }
    return (
    <div className="container__"> 
       <SectionHeader title="Calcular estilo de aprendizaje" instructions = {instructions}/>
       <hr/>    
       <h3 style={{marginLeft:"23px"}}>Yo aprendo<span className='learning__effect'>...</span></h3>
       <form noValidate onSubmit={handleSubmit(handleResults)}>
            <div className='response__container'>
                    <div className='style__container'>
                            <ResponseItem register={register} name="1" type={"discerniendo"}/>
                            <ResponseItem register={register} name="2" type={"receptivamente"}/>
                            <ResponseItem register={register} name="3" type={"sintiendo"}/>
                            <ResponseItem register={register} name="4" type={"aceptando"}/>
                            <ResponseItem register={register} name="5" type={"intuitivamente"}/>
                            <ResponseItem register={register} name="6" type={"abstracto"}/>
                            <ResponseItem register={register} name="7" type={"orientado al presente"}/>
                            <ResponseItem register={register} name="8" type={"aprendo más de la experiencia"}/>
                            <ResponseItem register={register} name="9" type={"emotivo"}/>
                    </div>
                    <div className='style__container'>
                            <ResponseItem register={register} name="10" type={"ensayando"}/>
                            <ResponseItem register={register} name="11" type={"relacionando"}/>
                            <ResponseItem register={register} name="12" type={"observando"}/>
                            <ResponseItem register={register} name="13" type={"arriesgando"}/>
                            <ResponseItem register={register} name="14" type={"productivamente"}/>
                            <ResponseItem register={register} name="15" type={"observando"}/>
                            <ResponseItem register={register} name="16" type={"reflexivamente"}/>
                            <ResponseItem register={register} name="17" type={"aprendo más de la observación"}/>
                            <ResponseItem register={register} name="18" type={"reservado"}/>
                    </div>
                    <div className='style__container'>
                            <ResponseItem register={register} name="19" type={"involucrándome"}/>
                            <ResponseItem register={register} name="20"type={"analíticamente"}/>
                            <ResponseItem register={register} name="21"type={"pensando"}/>
                            <ResponseItem register={register} name="22" type={"evaluando"}/>
                            <ResponseItem register={register} name="23" type={"lógicamente"}/>
                            <ResponseItem register={register} name="24" type={"concreto"}/>
                            <ResponseItem register={register} name="25" type={"orientado hacia el futuro"}/>
                            <ResponseItem register={register} name="26" type={"aprendo más por conceptos"}/>
                            <ResponseItem register={register} name="27" type={"racional"}/>
                    </div>
                    <div className='style__container'>
                            <ResponseItem register={register} name="28" type={"practicando"}/>
                            <ResponseItem register={register} name="29" type={"imparcialmente"}/>
                            <ResponseItem register={register} name="30" type={"haciendo"}/>
                            <ResponseItem register={register} name="31" type={"con cautela"}/>
                            <ResponseItem register={register} name="32" type={"cuestionando"}/>
                            <ResponseItem register={register} name="33" type={"activo"}/>
                            <ResponseItem register={register} name="34" type={"prágmatico"}/>
                            <ResponseItem register={register} name="35" type={"aprendo más de la práctica"}/>
                            <ResponseItem register={register} name="36" type={"abierto"}/>
                    </div>
            </div>
            {/* {"estilos: "+ styles.ea + " " + styles.ca + " "+ styles.or + " "+ styles.ec} */}
            <CalcButton/>
       </form>   

        {
        result?
                <div className="result__">
                        <p>¡Su estilo de aprendizaje es: {result}!</p>
                </div>
       :
                <></>
        }
       
    </div>
    );
}

export default LearningStyle;