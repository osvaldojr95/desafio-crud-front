import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Logo from "./Logo.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { selectUser, selectToken, login, logout } from "../redux/userSlice.js";

export default function Sidebar(props) {
  const { page, setRefresh, edit, setEdit, selected } = props;
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    const verifyLogin = async () => {
      const infoSerializado = localStorage.getItem("userInfo");
      if (currentUser.user) {
        setUser(currentUser.user);
        navigate("/home");
      } else if (infoSerializado) {
        const user = JSON.parse(infoSerializado);
        dispatch(login({ user: user.user, token: user.token }));
        setUser(user.user);
        setRefresh([]);
        navigate("/home");
      } else {
        localStorage.removeItem("userInfo");
        navigate("/");
      }
    };
    verifyLogin();
  }, []);

  const showError = (error) => {
    if (error === "clean") {
      setErrorMessage("");
    } else if (error === "email") {
      setErrorMessage("Insira o email");
    } else if (error === "password") {
      setErrorMessage("Insira a senha");
    } else if (error.status === 404) {
      setErrorMessage("Email não encontrado");
    } else if (error.status === 401) {
      setErrorMessage("Senha incorreta");
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    if (!email) {
      showError("email");
    } else if (!senha) {
      showError("password");
    } else {
      const URL = "https://momos-annotation-back.onrender.com/sign-in";
      const obj = { email, password: senha };
      const config = {};
      try {
        const response = await axios.post(URL, obj, config);
        showError("clean");
        const { data } = response;
        dispatch(login({ user: data.user, token: data.token }));
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ user: data.user, token: data.token })
        );
        navigate("/home");
      } catch (err) {
        showError(err.response);
      }
    }
  };

  const signup = async () => {
    navigate("/signup");
  };

  const signout = async () => {
    try {
      const URL = "https://momos-annotation-back.onrender.com/sign-out";
      const config = { headers: { Authorization: `Bearer ${token}` } };
      try {
        await axios.post(URL, {}, config);
      } catch (err) {}
    } catch (e) {}
    dispatch(logout());
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const save = async () => {
    const URL = `https://momos-annotation-back.onrender.com/${selected.id}/edit`;
    const obj = { text: edit };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.put(URL, obj, config);
      setRefresh([]);
    } catch (err) {
      console.log(err);
    }
  };

  const remove = async () => {
    const URL = `https://momos-annotation-back.onrender.com/${selected.id}/remove`;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.delete(URL, config, {});
      setRefresh([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container page={page}>
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
          <Button neon={true} margin={"20px 0 15px 0"} callback={signin}>
            Entrar
          </Button>
          <h3 className="text" onClick={signup}>
            Crie sua conta
          </h3>
        </form>
      ) : (
        <>
          <div className="row">
            <FaUserAlt className="icon user-icon" />
            <h1>Usuário: {user}</h1>
          </div>
          <div className="line" />
          <div className="row">
            <TbLogout onClick={signout} className="icon logout-icon" />
            <h1 className="pointer" onClick={signout}>Sair</h1>
          </div>
          <textarea value={edit} onChange={(e) => setEdit(e.target.value)} />
          <div className="row">
            <Button neon={true} callback={save}>
              Salvar
            </Button>
            <Button callback={remove}>Deletar</Button>
          </div>
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
  padding: ${(props) => (props.page === "signin" ? "30px" : "30px 0 50px 0")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  .row {
    height: 50px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .line {
    height: 2px;
    width: 100%;
    box-shadow: var(--neon);
  }

  .user-icon {
    font-size: 20px;
    margin-right: 15px;
  }

  .logout-icon {
    font-size: 28px;
    margin-right: 8px;
    cursor: pointer;
  }

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
    cursor: default;
  }

  h3 {
    text-align: center;
    cursor: pointer;
  }

  .pointer {
    cursor: pointer;
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

  textarea {
    width: 240px;
    height: 300px;
    color: #ffffff;
    background-color: #ffffff21;
    border: none;
    border-radius: 10px;
    margin: 40px 30px 0 30px;
    padding: 10px;
    resize: none;
  }
`;
