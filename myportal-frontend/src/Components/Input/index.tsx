import { CustomInput } from "./styles";
import { ChangeEvent } from "react";

interface InputProps{
    name: string;
    placeHolder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

const Input: React.FC<InputProps> = ({ name, placeHolder, onChange, type}) => {
    return (
        <CustomInput 
            name={name}
            placeholder={placeHolder}
            onChange={onChange}
            type={type}
        />
    );
}

export default Input