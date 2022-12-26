import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { selectUser, login } from "../redux/userSlice.js";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [usuarioErrorMessage, setUsuarioErrorMessage] = useState("");
  const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    const verifyLogin = async () => {
      const infoSerializado = localStorage.getItem("userInfo");
      if (currentUser.user) {
        navigate("/home");
      } else if (infoSerializado) {
        const user = JSON.parse(infoSerializado);
        dispatch(login({ user: user.user }));
        navigate("/home");
      } else {
        localStorage.removeItem("userInfo");
      }
    };
    verifyLogin();
  }, []);

  const showError = (error) => {
    if (error === "senhaDiferentes") {
      setSenhaErrorMessage("Senhas diferentes");
    } else if (error === "senha") {
      setSenhaErrorMessage("Insira a senha");
    } else if (error === "email") {
      setEmailErrorMessage("Insira o email");
    } else if (error === "username") {
      setUsuarioErrorMessage("Insira o usuráio");
    } else if (error.status === 409 && error.data === "email") {
      setEmailErrorMessage("Email já existente");
    } else if (error.status === 409 && error.data === "username") {
      setUsuarioErrorMessage("Usuário já existente");
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    if (email === "") {
      showError("email");
    } else if (senha !== senhaRepetida) {
      showError("senhaDiferentes");
    } else if (usuario === "") {
      showError("username");
    } else if (senha === "") {
      showError("senha");
    } else {
      const URL = "http://localhost:5000/sign-up";
      const obj = { username: usuario, email, password: senha };
      const config = {};
      try {
        await axios.post(URL, obj, config);
        navigate("/home");
      } catch (err) {
        showError(err.response);
      }
    }
  };

  return (
    <Container>
      <main>
        <div className="space">
          <form>
            <h2>Cadastro</h2>
            <h3>
              Email
              {emailErrorMessage !== "" ? <span>{emailErrorMessage}</span> : ""}
            </h3>
            <Input
              type={"text"}
              value={email}
              setValue={setEmail}
              resetMessage={setEmailErrorMessage}
              margin={"10px 0 20px 0"}
            />
            <h3>
              Usuário
              {usuarioErrorMessage !== "" ? (
                <span>{usuarioErrorMessage}</span>
              ) : (
                ""
              )}
            </h3>
            <Input
              type={"text"}
              value={usuario}
              setValue={setUsuario}
              resetMessage={setUsuarioErrorMessage}
              margin={"10px 0 20px 0"}
            />
            <h3>Senha</h3>
            <Input
              type={"password"}
              value={senha}
              setValue={setSenha}
              margin={"10px 0 20px 0"}
            />
            <h3>
              Repita a senha
              {senhaErrorMessage !== "" ? <span>{senhaErrorMessage}</span> : ""}
            </h3>
            <Input
              type={"password"}
              value={senhaRepetida}
              setValue={setSenhaRepetida}
              resetMessage={setSenhaErrorMessage}
              margin={"10px 0 20px 0"}
            />
            <div className="buttons">
              <Button
                width={"200px"}
                margin={"20px 0 15px 0"}
                callback={signup}
              >
                Criar conta
              </Button>
              <p
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancelar
              </p>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .space {
    height: 550px;
    width: 900px;
    background-color: #00000078;
    color: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 70px;
    box-shadow: var(--neon);
    padding: 30px;
  }

  h2 {
    width: 100%;
    font-size: 40px;
    text-align: center;
    text-shadow: var(--neon);
    margin-bottom: 20px;
    cursor: default;
  }

  h3 {
    cursor: default;
  }

  span {
    font-style: italic;
    font-weight: bold;
    color: red;
    margin-left: 15px;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }

  p {
    height: 35px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 15px 0;
    cursor: pointer;
  }
`;
