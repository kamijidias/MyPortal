import { ChangeEvent, MouseEvent, useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Form } from "./styles";
import { validatedEmail, validatedPassword } from "../../Utils/validators";

const Login: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>()
    const [form, setForm] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });
    console.log('Form', form)

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            setLoading(true)
            alert('Login')
            setLoading(false)
        } catch (err) {
            alert('Algo deu errado com o Login' + err)
        }
    }

    const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const inputValidator = () => {
        const email = form.email.trim();
        const password = form.password.trim();
        return validatedEmail(email) && validatedPassword(password);
    }

    return (
        <Container>
            <Form>
                <h1>Faça seu login 🧙🏻‍♂️</h1>
                <Input 
                    name= 'email'
                    placeHolder= 'Digite o seu e-mail'
                    onChange={handleChanged}
                    type='email'
                />
                <Input 
                    name= 'password'
                    placeHolder= 'Digite a sua senha'
                    onChange={handleChanged}
                    type='password'
                />
                <Button 
                    type='submit'
                    text='Acessar'
                    onClick={handleSubmit}
                    disabled={loading === true || !inputValidator() }
                />
                <div>
                    <p>Não possui conta?</p>
                    <p>Esqueceu sua senha?</p>
                    <button>Cadastrar</button>
                </div>
            </Form>
        </Container>
    )
}

export default Login;