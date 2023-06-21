import { ChangeEvent, useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Form } from "./styles";
import { validatedEmail, validatedPassword } from "../../Utils/validators";
import UserServices from "../../Services/UserServices";

interface LoginFormData {
    email: string;
    password: string;
  }

const userService = new UserServices()

const Login: React.FC = () => {
    const [, setLoading] = useState<Boolean>()
    const [form, setForm] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
          setLoading(true);
          const { email, password } = form;
    
          // Verifica se o email está no formato correto
          if (!validatedEmail(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Digite um email válido' }));
            setLoading(false);
            return;
          }
    
          // Verifica se a senha atende aos requisitos
          if (!validatedPassword(password)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              password: 'senha incorreta'
            }));
            setLoading(false);
            return;
          }
    
          const response = await userService.Login(form);
          if (response) {
            alert('Usuário logado com sucesso');
            // Implementar navegação para HOME
          }
          setLoading(false);
        } catch (err) {
          alert('Algo deu errado com o Login' + err);
          setLoading(false);
        }
      };

    const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
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
                    style={{ borderColor: errors.email || errors.password ? '#FF9999' : undefined }}
                />
                    {errors.email && <p style={{ color: '#FF9999' }}>{errors.email}</p>} 
                <Input 
                    name= 'password'
                    placeHolder= 'Digite a sua senha'
                    onChange={handleChanged}
                    type='password'
                    style={{ borderColor: errors.email || errors.password ? '#FF9999' : undefined  }}
                />
                    {errors.password && <p style={{ color: '#FF9999' }}>{errors.password}</p>} 
                <Button 
                    type='submit'
                    text='Acessar'
                    onClick={handleSubmit}
                />
                <div>
                    <p>Esqueceu sua senha?</p>
                    <a href="/register">Cadastrar</a>
                </div>
            </Form>
        </Container>
    )
}

export default Login;