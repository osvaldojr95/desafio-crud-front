import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [usuarioErrorMessage, setUsuarioErrorMessage] = useState("");
  const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    navigate("/home");
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
              {emailErrorMessage !== "" ? <span>{emailErrorMessage}</span> : ""}
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
              type={"text"}
              value={senha}
              setValue={setSenha}
              margin={"10px 0 20px 0"}
            />
            <h3>
              Repita a senha
              {emailErrorMessage !== "" ? <span>{emailErrorMessage}</span> : ""}
            </h3>
            <Input
              type={"text"}
              value={senhaRepetida}
              setValue={setSenhaRepetida}
              resetMessage={setSenhaErrorMessage}
              margin={"10px 0 20px 0"}
            />
            <div className="buttons">
              <Button width={"200px"} margin={"20px 0 15px 0"} callback={signup}>
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
  }
`;
