import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const DummyList = [
//   {
//     id: 1,
//     writer: "손성오",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 2,
//     writer: "이준",
//     content: "하이 2",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 3,
//     writer: "유원우",
//     content: "하이 3",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (writer, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      writer,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((el) => el.id !== targetId);

    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
