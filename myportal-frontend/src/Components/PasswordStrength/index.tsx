import React from 'react';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const getPasswordStrength = (password: string): { score: number; color: string } => {
      const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      const length = password.length;
      const hasSpecialChar = regex.test(password);
   
      let score = 0;
      let color = '';
   
      if (length >= 8) {
        score += 1;
      }
   
      if (hasSpecialChar) {
        score += 1;
      }
   
      if (length >= 12) {
        score += 1;
      }
   
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score += 1;
      }
   
      if (/[0-9]/.test(password)) {
        score += 1;
      }
   
      if (score === 5) {
        color = 'green';
      } else if (score >= 3) {
        color = 'orange';
      } else {
        color = 'red';
      }
   
      return { score, color };
    };
   
    const { score, color } = getPasswordStrength(password);

     const lineStyle = {
      width: '350px',
      height: '12px',
      backgroundColor: color,
      borderRadius: '6px',
    };
 
    return (
      <div>
        <p style={{ textAlign: 'center'}}>Força da senha: {score}/5</p>
        <div style={lineStyle}></div>
      </div>
    );
  };
 
  export default PasswordStrength;