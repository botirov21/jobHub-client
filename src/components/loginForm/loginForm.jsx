import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,  
  SubmitButton,
} from "./style";
import { Marginer } from "./marginer";
import { AccountContext } from "./accountContext";
import Alert from '@mui/material/Alert'; // Import Alert from Material-UI

const BASEURL = "https://api-job-offer.isabek.uz/api/v1/";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null); // State for login error
  const [username, setUsername] = useState(""); // State for username
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the username exists in localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Run this effect only once when the component mounts

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASEURL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("username", data.name);
        setUsername(data.name); // Set username in state
        navigate("/");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      setLoginError("Password or email is wrong"); // Set login error
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      handleLogin();
    }
  }
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)}/>
        {errors.email && <span style={ {color:'red'}} className="error">{errors.email}</span>}
        <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        {errors.password && <span style={ {color:'red'}} className="error">{errors.password}</span>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      {loginError && <Alert severity="error">{loginError}</Alert>} {/* Render login error */}
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
