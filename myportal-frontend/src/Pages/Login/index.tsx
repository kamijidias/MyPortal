import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Form } from "./styles";

const Login = () => {
    return (
        <Container>
            <Form>
                <h1>Faça seu login 🧙🏻‍♂️</h1>
                <Input />
                <Input />
                <Button />
                <div>
                    <p>Não possui conta?</p>
                    <button>Cadastrar</button>
                </div>
            </Form>
        </Container>
    )
}

export default Login;