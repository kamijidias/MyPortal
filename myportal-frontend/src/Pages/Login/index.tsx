import { ChangeEvent, MouseEvent } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Form } from "./styles";

const Login: React.FC = () => {

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        alert('Login ')
    }

    const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('teste de digitação',event.target.name, event.target.value)
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
                    name= 'email'
                    placeHolder= 'Digite o sua senha'
                    onChange={handleChanged}
                    type='password'
                />
                <Button 
                    type='submit'
                    text='Acessar'
                    onClick={handleSubmit}
                    // disabled={!inputValidantion()}
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