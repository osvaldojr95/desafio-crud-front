import styled from "styled-components";
import Sidebar from "../components/Sidebar.jsx";
import Logo from "../components/Logo.jsx";

export default function Signup() {
  return (
    <Container>
      <Logo big={true} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    .logo {
      height: 200px;
      width: 450px;
      font-size: 40px;
      background-color: #00000078;
      color: white;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 70px 0 70px 70px;
      box-shadow: var(--neon);
    }

    .neon {
      text-shadow: var(--neon);
    }

    h1 {
      font-size: 80px;
    }

    h2 {
      font-size: 40px;
    }
  }
`;
