/* Tailwind init troubleshooting & recommended commands
   If `npx tailwindcss init -p` yields "could not determine executable to run", try the steps below.

   1) Ensure dependencies are installed (after upgrading Vite if you chose that path):
      npm install

   2) Install Tailwind + PostCSS + Vite plugin:
      npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite

   3) Initialize Tailwind config (pick one):
      npx tailwindcss init -p
      OR (force fetch the CLI)
      npx tailwindcss@latest init -p
      OR (alternative npx form)
      npx -p tailwindcss@latest tailwindcss init -p
      OR (use local binary directly)
      ./node_modules/.bin/tailwindcss init -p
      OR (add script to package.json and run it)
      // in package.json "scripts": { "tailwind:init": "tailwindcss init -p" }
      npm run tailwind:init

   4) If you still see errors, paste the full npm/npx output here and I'll suggest the next step.
*/

import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button.jsx';
import Input from './Input.jsx';


const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;




export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          {/* applying styles dynamically, conditionally with vanilla CSS. Template literal (with the tick symbol and also dollar sign to apply the condition) used for conditional class application */}
          {/* <Label className = {`label ${emailNotValid ? 'invalid' : ""}`} >Email</Label> */}
          {/* <Label $invalid={emailNotValid}>Email</Label> */}

          <Input
            label='Email'
            invalid={emailNotValid}
            type="email"
            // className={emailNotValid ? 'invalid' : undefined}
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          {/* <Label className = {`label ${passwordNotValid ? 'invalid' : ''}`} >Password</Label> */}
          {/* <Label $invalid = {passwordNotValid} >Password</Label> */}
          <Input
            label='Password'
            invalid = {passwordNotValid}
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            $invalid = {passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
