import Instruction from "../Instruction";
const SectionHeader = (props) => (
    <div className='instruction__'>
            <h2>{props.title}</h2>
            <Instruction instructions={props.instructions}/>
    </div>
);

export default SectionHeader;