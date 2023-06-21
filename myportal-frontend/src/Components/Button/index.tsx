import { MouseEvent } from "react";
import { CustomButton } from "./styles";

interface ButtonProps {
    type: "submit" | "button" | 'reset';
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
    return (
        <CustomButton 
            type={type}
            onClick={onClick}
        >
            {text}
        </CustomButton>
    );
}

export default Button