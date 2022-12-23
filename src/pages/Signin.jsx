import styled from "styled-components";
import Sidebar from "../components/Sidebar.jsx";
import Logo from "../components/Logo.jsx";

export default function Signin() {
  return (
    <Container>
      <Sidebar page={"signin"} />
      <main>
        <Logo big={true}/>
      </main>
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
    padding-left: 320px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
`;
