import DiaryItem from "./DiaryItem";

const DiaryList = (props) => {
  return (
    <>
      <div className="DiaryList">
        <h2>일기 리스트</h2>;
        <h4>{props.diaryList.length}개의 일기가 있습니다</h4>
        <div>
          {props.diaryList.map((el) => (
            <DiaryItem key={el.id} {...el} onDelete={props.onDelete} />
          ))}
        </div>
      </div>
    </>
  );
};
export default DiaryList;
