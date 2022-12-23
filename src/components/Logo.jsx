import styled from "styled-components";

export default function Logo(props) {
  const { big } = props;

  return (
    <Container big={big}>
      <div>
        <h1 className="neon">MoMo's</h1>
        <h2 className="neon">Annotation</h2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    height: ${(props) => (props.big ? "200px" : "80px")};
    width: ${(props) => (props.big ? "450px" : "180px")};
    font-size: 40px;
    background-color: #00000078;
    color: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => (props.big ? "70px 0 70px 70px" : "28px 0 28px 28px;")};
    box-shadow: var(--neon);
  }

  .neon {
    text-shadow: var(--neon);
  }

  h1 {
    font-size: ${(props) => (props.big ? "80px" : "30px")};
  }

  h2 {
    font-size: ${(props) => (props.big ? "40px" : "15px")};
  }
`;
