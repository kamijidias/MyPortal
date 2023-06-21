import { ChangeEvent, useState } from "react";
import Input from "../../Components/Input";
import { Container, ContainerSign, Form } from "./styles";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";

interface ForgotPasswordFormData {
    name: string;
    email: string;
  }

const ForgotPassword: React.FC = () => {

  const [form, setForm] = useState<ForgotPasswordFormData>({
    name: '',
    email: '',
  })

  const handleSendEmail = () => {
    console.log('clickou')
  }

  const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

    return (
        <Container>
            <Form>
                <h1>Insira seu nome e seu email</h1>
                <Input 
                    name= 'name'
                    placeHolder= 'Digite seu nome'
                    onChange={handleChanged}
                    type='email'
                />
                <Input 
                    name= 'email'
                    placeHolder= 'Digite seu email'
                    onChange={handleChanged}
                    type='email'
                />
                <Button 
                    type='submit'
                    text='Reenviar email'
                    onClick={handleSendEmail}
                />
                <ContainerSign>
                    <p>Senha recuperada?</p>
                    <NavLink to="login">Login</NavLink>
                </ContainerSign>
            </Form>
        </Container>
    )
}

export default ForgotPassword;