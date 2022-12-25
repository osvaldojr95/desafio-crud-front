import { useEffect, useState } from "react";
import styled from "styled-components";
import Annotation from "../components/Annotation.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  const [annotations, setAnnotations] = useState([
    { id: 1, text: "hello word" },
    { id: 2, text: "hello word" },
    { id: 3, text: "hello word" },
    { id: 4, text: "hello word" },
    { id: 5, text: "hello word" },
    { id: 6, text: "hello word" },
    { id: 7, text: "hello word" },
    { id: 8, text: "hello word" },
    { id: 9, text: "hello word" },
    { id: 10, text: "hello word" },
  ]);
  const [selected, setSelected] = useState({ id: 0 });
  const [refresh, setRefresh] = useState([]);

  const listAnnotations = () => {
    return annotations.map((annotation, index) => {
      return (
        <Annotation
          selected={selected}
          setSelected={setSelected}
          key={index}
          id={annotation.id}
        >
          {annotation.text}
        </Annotation>
      );
    });
  };

  // UPDATE
  const saveAnnotation = async () => {
    setRefresh([]);
  };

  // DELETE
  const deleteAnnotation = async () => {
    setRefresh([]);
  };

  // CREATE
  const createAnnotation = async () => {
    setRefresh([]);
  };

  // READ
  useEffect(() => {}, [refresh]);

  return (
    <Container>
      <Sidebar page={"home"} />
      <main>
        <h1>Suas anotações:</h1>
        <div className="list">
          {listAnnotations()}
          <Annotation
            add={true}
            create={createAnnotation}
            selected={selected}
          />
        </div>
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
    height: 100%;
    width: 100%;
    padding-left: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      font-size: 40px;
      margin: 25px 0;
    }

    .list {
      height: calc(100% - 90px);
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      flex-grow: 0;
      flex-shrink: 0;
      gap: 30px;
      overflow-y: scroll;
      padding-bottom: 20px;
    }
  }
`;
