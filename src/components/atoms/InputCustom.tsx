import { useFormikContext } from 'formik';

type InputCustom_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    className?: string;
    type?: string;
    handleChange?: any;
    value?: any;
    name?: any;
};
const InputCustom = ({ label, placeholder, description, error, className, value, name, type, handleChange, ...props }: InputCustom_TP) => {
    const { values, setFieldValue } = useFormikContext<any>(); /////////// STATES

    return (
        <input
            id={name}
            {...props}
            name={name}
            value={values[name]}
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
                if (props?.value === undefined) {
                    setFieldValue(name, e.target.value);
                }
            }}
            className="form-input"
            required
        />
    );
};

export default InputCustom;
