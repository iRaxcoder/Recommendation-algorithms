import CustomSelect from "./CustomSelect";

const ResponseItem = (props) => (
    <div className="response__item">
        <CustomSelect name={props.name} register={props.register}/>
        <label>{props.type}</label>
    </div>
)

export default ResponseItem;