import { useState } from "react";
import CustomModal from "./CustomModal";

const Instruction = ({instructions}) => {
    const [isOpen, setIsOpen]= useState(false);
    return (
    <>
        <button onClick={()=>setIsOpen(!isOpen)} aria-label="Ayuda" className="instruction">Ayuda</button>
        <CustomModal
        props={{title: 'Estilo de aprendizaje', isOpen: isOpen}}
        methods={{toggleOpenModal: ()=>setIsOpen(!isOpen)}}
        >
        <h3>Instrucciones</h3>
        <ul>
                {instructions.map((i=>(
                    <li key={i}>{i}</li>
                )))}
        </ul>
        </CustomModal>

    </>
    );
}

export default Instruction;