const DiaryItem = (props) => {
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
      <div className="content">{props.content}</div>
      <button
        onClick={() => {
          console.log(props.id);
          if (window.confirm(`${props.id}번쨰 일기를 정말 삭제하시겠습니까?`)) {
            props.onDelete(props.id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
