import { useEffect, useState } from "react";
import styled from "styled-components";
import Annotation from "../components/Annotation.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../redux/userSlice.js";
import axios from "axios";

export default function Home() {
  const [annotations, setAnnotations] = useState([]);
  const [selected, setSelected] = useState({ id: 0 });
  const [refresh, setRefresh] = useState([]);
  const [edit, setEdit] = useState("");
  const token = useSelector(selectToken);

  const listAnnotations = () => {
    return annotations.map((annotation, index) => {
      return (
        <Annotation
          selected={selected}
          setSelected={setSelected}
          key={index}
          id={annotation._id}
          setEdit={setEdit}
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
    const URL = "http://localhost:5000/create";
    const obj = { text: "" };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.post(URL, obj, config);
      setRefresh([]);
    } catch (e) {}
  };

  // READ
  useEffect(() => {
    const getList = async () => {
      const URL = "http://localhost:5000/listAll";
      const obj = {};
      const config = { headers: { Authorization: `Bearer ${token}` } };
      try {
        const response = await axios.get(URL, config);
        const { data } = response;
        const list = [...data];
        setAnnotations(list);
        if (selected.id === -1) {
          setSelected({ id: list.at(-1)._id });
        }
      } catch (e) {}
    };
    if (token) {
      getList();
    }
  }, [refresh]);

  return (
    <Container>
      <Sidebar
        selected={selected}
        edit={edit}
        setEdit={setEdit}
        setRefresh={setRefresh}
        page={"home"}
      />
      <main>
        <h1>Suas anotações:</h1>
        <div className="list">
          {listAnnotations()}
          <Annotation
            add={true}
            create={createAnnotation}
            selected={selected}
            setSelected={setSelected}
            setEdit={setEdit}
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
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      flex-grow: 0;
      flex-shrink: 0;
      gap: 30px;
      padding-bottom: 20px;
    }
  }
`;
