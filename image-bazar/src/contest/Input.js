import "./input.css";
// inputData = { name, label, errorMessage, isValid }
export const Input = ({ name, label, errorMessage, isValid, type }) => {
    /**
     * For every input properties that Input component need to handle
     *  { name, label, errorMessage, isValid }
     */

    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} className={isValid ? 'valid' : 'invalid'} />
            {!isValid && <span className="error">{errorMessage}</span>}
        </div>
    );
}