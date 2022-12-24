import styled from "styled-components";

export default function Button(props) {
  const { width, type, obj, margin, callback } = props;
  return (
    <Container
      width={width}
      type={type}
      margin={margin}
      onClick={
        obj
          ? (e) => {
              callback(e, obj);
            }
          : callback
      }
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
  color: #c300ff;
  background-color: #e9e9e9;
  border: none;
  box-shadow: 0 0 20px #c300ff, 0 0 30px #c300ff;
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;
