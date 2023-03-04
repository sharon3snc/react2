import { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setStrength(evaluatePassword(value));
  };

  const evaluatePassword = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/\d/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score++;
    return score;
  };

  let strengthText = "";
  switch (strength) {
    case 1:
      strengthText = "Débil";
      break;
    case 2:
    case 3:
      strengthText = "Normal";
      break;
    case 4:
      strengthText = "Fuerte";
      break;
    default:
      strengthText = "";
  }

  return (
    <div>
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {strengthText && <p>Tu contraseña es: {strengthText}</p>}
    </div>
  );
};

export default PasswordStrength;
