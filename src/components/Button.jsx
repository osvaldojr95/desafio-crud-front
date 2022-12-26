import styled from "styled-components";

export default function Button(props) {
  const { width, type, neon, obj, margin, callback } = props;
  return (
    <Container
      width={width}
      neon={neon}
      type={type}
      margin={margin}
      onClick={callback}
    >
      {props.children}
    </Container>
  );
}

const Container = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.neon ? "#c300ff" : "#e9e9e9")};
  background-color: ${(props) => (props.neon ? "#e9e9e9" : "#c300ff44")};
  border: none;
  box-shadow: ${(props) =>
    props.neon ? "0 0 20px #c300ff, 0 0 30px #c300ff;" : ""};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  cursor: pointer;
`;
