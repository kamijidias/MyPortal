export interface ProfileProps {
    content: string;
    successful?: boolean;
    message?: string;
}

export type State = {
    successful: boolean;
    message: string;
};

export interface ProfileYupProps {
    name: string,
    secondName: string, 
    cellphone: string,
    zipCode: string,
    email: string;
  }
  
export interface FormState {
    name: string;
    secondName: string;
    cellphone: string;
    zipCode: string;
    email: string;
};

export const initialState: FormState = {
    name: 'Andrew',
    secondName: 'Kamiji',
    cellphone: '4799779781',
    zipCode: '33850000',
    email: 'kamiji@dev.com',
};
