import styled from "styled-components";

export default function Input(props) {
  const { width, type, height, margin, value, setValue, resetMessage } = props;
  return (
    <Container
      type={type}
      value={value}
      onChange={(e) => {
        if (resetMessage) {
          resetMessage("");
        }
        setValue(e.target.value);
      }}
      width={width}
      height={height}
      margin={margin}
    ></Container>
  );
}

const Container = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "35px")};
  color: #ffffff;
  background-color: #ffffff21;
  border: none;
  border-radius: 10px;
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding-left: 10px;
`;
