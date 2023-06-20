import { MouseEvent } from "react";
import { CustomButton } from "./styles";

interface ButtonProps {
    type: "submit" | "button" | 'reset';
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, disabled}) => {
    return (
        <CustomButton 
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </CustomButton>
    );
}

export default Button