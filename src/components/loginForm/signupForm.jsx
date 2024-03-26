import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
} from "./style";
import { Marginer } from "./marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";

const BASEURL = "https://api-job-offer.isabek.uz/api/v1/";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegisterSubmit = async () => {
    try {
      const response = await fetch(`${BASEURL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/');
      } else {
        setErrors('Registration failed');
      }
    } catch (error) {
      setErrors('Data not found');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleRegisterSubmit();
    }
  };

  const passwordStrength = () => {
    if (password.length === 0) {
      return '';
    } else if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        {errors.name && <span style={ {color:'red'}} className="error">{errors.name}</span>}
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span style={ {color:'red'}} className="error">{errors.email}</span>}
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {errors.password && <span style={ {color:'red'}} className="error">{errors.password}</span>}
        <div className="password-strength">{passwordStrength()}</div> 
        <Input type="password" placeholder="Confirm password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
        {errors.repeatPassword && <span style={ {color:'red'}} className="error">{errors.repeatPassword}</span>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
