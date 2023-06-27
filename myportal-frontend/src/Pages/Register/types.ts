export type RegisterProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type State = {
  successful: boolean;
  message: string;
};