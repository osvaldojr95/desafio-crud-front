import styled from "styled-components";

export default function Annotation(props) {
  const { add } = props;
  return (
    <Container onClick={() => {}} add={add}>
      {!add ? props.children : "+"}
    </Container>
  );
}

const Container = styled.div`
  height: 150px;
  width: 31%;
  font-size: ${(props) => (props.add ? "100px" : "20px")};
  background-color: #000000a1;
  color: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: ${(props) => (props.add ? "center" : "flex-start")};
  align-items: ${(props) => (props.add ? "center" : "flex-start")};
  padding: 10px;
`;
