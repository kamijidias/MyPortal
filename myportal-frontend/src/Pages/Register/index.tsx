import { ChangeEvent, useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, ContainerSign, Form } from "./styles";
import { validatedEmail, validatedPassword, valitedConfirmPassword, valitedName } from "../../Utils/validators";
import UserServices from "../../Services/UserServices";
import { NavLink ,useNavigate } from "react-router-dom";
import PasswordStrength from "../../Components/PasswordStrength";

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

const userService = new UserServices()

const Register: React.FC = () => {
    const [, setLoading] = useState<Boolean>()
    const [form, setForm] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
    const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(true);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
          setLoading(true);
          const { name ,email, password, confirmPassword} = form;

          // Verifica se o name está no formato correto
          if (!valitedName(name)) {
            setErrors((prevErrors) => ({...prevErrors, name: 'Nome do usuário inválido'}))
            setLoading(false);
            return
          }
    
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
              password: 'Senha inválida'
            }));
            setLoading(false);
            return;
          }

          // Verifica se o name está no formato correto
          if (!valitedConfirmPassword(password, confirmPassword)) {
            setErrors((prevErrors) => ({...prevErrors, confirmPassword: 'Senha não confere'}))
            setLoading(false);
            return
          }
    
          const { data } = await userService.register({
            name: form.name,
            email: form.email,
            password: form.password,
          });
          if (data) {
            const responseLogin = await userService.Login({
              name: form.email,
              password: form.password,
            })
            if (!!responseLogin) {
              alert('usuário cadastrado com sucesso')
              navigate('/home')
            }
          }
          setLoading(false);
        } catch (err) {
          alert('Usuário já cadastrado em nosso sistema' + err);
          setLoading(false);
        }
      };

    const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
        if (event.target.name === 'password') {
          setIsPasswordEmpty(event.target.value === '');
        }
    }

    return (
        <Container>
            <Form>
                <h1>Faça seu cadastro</h1>
                <Input 
                    name= 'name'
                    placeHolder= 'Digite seu nome'
                    onChange={handleChanged}
                    type='text'
                    style={{ borderColor: errors.name ? '#FF9999' : undefined }}
                />
                  {errors.name && <p style={{ color: '#FF9999' }}>{errors.name}</p>} 
                <Input 
                    name= 'email'
                    placeHolder= 'Digite seu e-mail'
                    onChange={handleChanged}
                    type='email'
                    style={{ borderColor: errors.email ? '#FF9999' : undefined }}
                />
                    {errors.email && <p style={{ color: '#FF9999' }}>{errors.email}</p>} 
                <Input 
                    name= 'password'
                    placeHolder= 'Digite sua senha'
                    onChange={handleChanged}
                    type='password'
                    style={{ borderColor: errors.password ? '#FF9999' : undefined  }}
                />
                    {errors.password && <p style={{ color: '#FF9999' }}>{errors.password}</p>} 
                    {!isPasswordEmpty && <PasswordStrength password={form.password.toString()} />}
                <Input 
                    name= 'confirmPassword'
                    placeHolder= 'Confirm sua senha'
                    onChange={handleChanged}
                    type='password'
                    style={{ borderColor: errors.confirmPassword ? '#FF9999' : undefined  }}
                />
                    {errors.confirmPassword && <p style={{ color: '#FF9999' }}>{errors.confirmPassword}</p>} 
                <Button 
                    type='submit'
                    text='Efetuar cadastro'
                    onClick={handleSubmit}
                />
                <ContainerSign>
                    <p>Já possui conta?</p>
                    <NavLink to="login">Login</NavLink>
                </ContainerSign>
            </Form>
        </Container>
    )
}

export default Register;