import { validatedEmail } from "../../Utils/validators";

interface ValidationErrorProps {
    errorMessage: string;
    hasChanged: boolean;
    type: 'required' | 'email',
    value: string;
    testId: string;
}

const ValidationError = (props: ValidationErrorProps) => {
    if (!props.hasChanged) {
        return null;
    }

    const error = <div>{props.errorMessage}</div>


    return (
        !validatedEmail(props.value) ? 
            error
        : null
    )
}

export default ValidationError

