import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ResetCss from "./styles/resetCss";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Videobackground from "./assets/Spacecafe.mp4";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Container>
        <video src={Videobackground} type="video/mp4" loop autoPlay muted />
        <div className="darker" />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </main>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;

  video {
    height: 100%;
    width: 100%;
    position: fixed;
    object-fit: cover;
    z-index: 1;
  }

  main {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 3;
  }

  .darker {
    height: 100%;
    width: 100%;
    position: fixed;
    background: linear-gradient(
      0deg,
      #0000004f 0%,
      rgba(0, 0, 0, 0.08680566953343838) 37%,
      rgba(0, 0, 0, 0.08960678998161764) 63%,
      #0000004f 100%
    );
    z-index: 2;
  }
`;
