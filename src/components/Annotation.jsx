import styled from "styled-components";

export default function Annotation(props) {
  const { add, selected, setSelected, id, create } = props;
  return (
    <Container
      selected={add ? false : selected.id === id ? true : false}
      onClick={() => {
        if (!add) {
          setSelected({ id });
        } else {
          create();
        }
      }}
      add={add}
    >
      {!add ? props.children : "+"}
    </Container>
  );
}

const Container = styled.div`
  height: 150px;
  width: 31%;
  font-size: ${(props) => (props.add ? "100px" : "20px")};
  background-color: ${(props) => (props.selected ? "#e600ff5e" : "#000000a0")};
  color: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: ${(props) => (props.add ? "center" : "flex-start")};
  align-items: ${(props) => (props.add ? "center" : "flex-start")};
  padding: 10px;
`;
