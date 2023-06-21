import { CustomInput } from "./styles";
import { ChangeEvent } from "react";

interface InputProps{
    name: string;
    placeHolder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ name, placeHolder, onChange, type, style}) => {
    return (
        <CustomInput 
            name={name}
            placeholder={placeHolder}
            onChange={onChange}
            type={type}
            style={style}
        />
    );
}

export default Input