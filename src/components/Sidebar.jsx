import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./Logo.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { selectUser, login, logout } from "../redux/userSlice.js";

export default function Sidebar(props) {
  const { page } = props;
  const [user, setUser] = useState("123");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (!currentUser.user) {
      navigate("/");
    }
    setUser(currentUser.user);
  }, [dispatch]);

  const signin = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        dispatch(login({ user: email }));
        navigate("/home");
      }
    } catch (err) {}
  };

  const signup = async () => {
    navigate("/signup");
  };

  const signout = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      {page === "signin" ? (
        <form>
          <h2 className="text">Email</h2>
          <Input
            type={"text"}
            value={email}
            setValue={setEmail}
            resetMessage={setErrorMessage}
          />
          <h2 className="text space">Senha:</h2>
          <Input
            type={"password"}
            value={senha}
            setValue={setSenha}
            resetMessage={setErrorMessage}
          />
          <p>{errorMessage}</p>
          <Button margin={"20px 0 15px 0"} callback={signin}>
            Entrar
          </Button>
          <h3 className="text" onClick={signup}>
            Crie sua conta
          </h3>
        </form>
      ) : (
        <>
          <h1>Usuário: {user}</h1>
          <h1 onClick={signout}>Sair</h1>
          <Logo />
        </>
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

  h3 {
    font-size: 20px;
  }
`;
