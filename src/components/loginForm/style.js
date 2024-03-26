import styled from 'styled-components';
import loginBack from '../assets/loginBack.jpg'
export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(200, 200, 200, 0.8);
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: #4348DB;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed #4348DB ;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }


  &:focus {
    outline: none;
    border-bottom: 1px solid #4348DB;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: #4348DB;

  &:hover {
    filter: brightness(1.03);
    background: green;
  }
`;

export const LineText = styled.p`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap:20%;
    width:100vw;
    height:100vh;
`;

export const LogoWrapper = styled.div`

`
