import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../db";
import ResetPassword from "./ResetPassword";
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormButton,
} from './LoginStyles';
import { Container } from "../../globalStyles";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log("login", response, response.user);
      setInputEmail("");
      setInputPassword("");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(inputEmail, inputPassword);
  };

  return (
    <FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Sign Up</FormTitle>
      <FormWrapper onSubmit={handleSubmit}>
		  <FormInputRow>

        <FormInput
          type="text"
          value={inputEmail}
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <FormInput
          type="password"
          value={inputPassword}
          placeholder="Password"
          onChange={(e) => setInputPassword(e.target.value)}
        />
		</FormInputRow>
       <FormButton type='submit'>Create Account</FormButton>
      </FormWrapper>
	  
      <ResetPassword />
	  </FormColumn>
				</FormRow>
			</Container>
		</FormSection>


  );
};

export default Login;