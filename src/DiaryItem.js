import React, { useEffect, useRef, useState } from "react";

const DiaryItem = (props) => {
  useEffect(() => {
    console.log(`${props.id}번째 아이템 렌더`);
  });

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(props.content);

  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${props.id}번쨰 일기를 정말 삭제하시겠습니까?`)) {
      props.onRemove(props.id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(props.content);
  };

  const handleEdit = () => {
    //수정시에도 기존 조건과 같게 3글자 이상 작성가능하도록
    if (localContent.length < 3) {
      localContentInput.current.focus();
      return;
    }
    //수정 할건지 확인
    if (window.confirm(`${props.id}번 째 일기를 수정하시겠습니까?`)) {
      props.onEdit(props.id, localContent);
      //수정 한 후 입력창 닫기
      toggleIsEdit(false);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자:{props.writer} | 감정점수:{props.emotion}
        </span>
        <br />
        <span className="date">
          {new Date(props.created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{props.content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
