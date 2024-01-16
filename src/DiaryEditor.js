import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const writerInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    writer: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.writer.length < 1) {
      writerInput.current.focus();
      return; //저장 성공 방지
    }

    if (state.content.length < 3) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.writer, state.content, state.emotion);
    alert("저장 성공");
    setState({
      writer: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      {/* 작성자 */}
      <div>
        <input
          ref={writerInput}
          name="writer"
          value={state.writer}
          onChange={handleChangeState}
          placeholder="작성자"
        />
      </div>
      {/* 일기 내용 */}
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="일기"
        />
      </div>
      {/* 감정 점수 */}
      <div>
        <span>오늘의 감정 점수:</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      {/* 일기 저장 */}
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
