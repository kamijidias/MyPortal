const validatedEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const validatedPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  }

const valitedName = (name: string): boolean => {
    return name?.toString().length > 3
}

const valitedConfirmPassword = (password: string ,confirmPassword: string): boolean => {
    return validatedPassword(password) && password === confirmPassword
}

export {
    validatedEmail,
    validatedPassword,
    valitedName,
    valitedConfirmPassword
}