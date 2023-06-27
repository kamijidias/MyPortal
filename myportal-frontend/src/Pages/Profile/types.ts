export interface ProfileProps {
    content: string;
}
  
export interface FormState {
    name: string;
    secondName: string;
    cellphone: string;
    zipCode: string;
    email: string;
};

export const initialState: FormState = {
    name: '',
    secondName: '',
    cellphone: '',
    zipCode: '',
    email: '',
};
