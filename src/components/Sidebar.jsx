import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Sidebar(props) {
  const { page } = props;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const signup = async () => {
    navigate("/signup");
  };

  return (
    <Container>
      {page === "signin" ? (
        <form>
          <h2 className="text">Email</h2>
          <input
            value={email}
            onChange={(e) => {
              if (errorMessage !== "") {
                setErrorMessage("");
              }
              setEmail(e.target.value);
            }}
          />
          <h2 className="text space">Senha:</h2>
          <input
            type="password"
            value={senha}
            onChange={(e) => {
              if (errorMessage !== "") {
                setErrorMessage("");
              }
              setSenha(e.target.value);
            }}
          />
          <p>{errorMessage}</p>
          <button type="submit" onClick={login}>
            Entrar
          </button>
          <h3 className="text" onClick={signup}>
            Crie sua conta
          </h3>
        </form>
      ) : (
        <Logo />
      )}
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #0000009d;
  color: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  z-index: 5;

  .text {
    width: 100%;
    text-shadow: var(--neon);
  }

  form {
    width: 100%;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    color: #ffffff;
    background-color: #ffffff21;
    border: none;
    border-radius: 10px;
  }

  h3 {
    text-align: center;
  }

  p {
    height: 20px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    color: #ff0000;
  }

  .space {
    margin-top: 10px;
  }

  button {
    width: 100%;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    color: #c300ff;
    background-color: #e9e9e9;
    border: none;
    box-shadow: 0 0 20px #c300ff, 0 0 30px #c300ff;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
  }
`;
