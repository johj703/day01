import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });
  const [items, setItems] = useState([
    "사과",
    "바나나",
    "오렌지",
    "포도",
    "감귤",
    "망고",
    "수박",
    "딸기",
  ]);
  const [inputFruit, setInputFruit] = useState("");

  const { name, age } = user;

  // input을 관리하기 위해서는 2가지!
  // value, onChange

  const addNewItem = (e) => {
    e.preventDefault();
    alert("새로운 아이템 추가하는 함수가 호출됐어요!");

    // 원래 있던 items 배열에서 inputFruit의 값을 끼워 넣어서
    // setItems를 해주면 되는 구나!
    console.log("inputFruits => ", inputFruit);

    // (1) 새로운 배열
    const newArr = [...items, inputFruit];
    console.log(newArr);

    setItems(newArr);
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>사용자의 아이템 목록</h2>

      <form onSubmit={addNewItem}>
        <input
          value={inputFruit}
          onChange={(e) => {
            const newText = e.target.value;
            setInputFruit(newText);
          }}
        />
        <button type="button">테스트버튼</button>
        <button type="submit">제출</button>
      </form>
      <ul>
        {/* 
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li> 
        */}
        {items
          .filter((i) => i !== "사과")
          .map((item) => {
            <li key={item}>{item}</li>;
          })}
      </ul>
      <button
        onClick={() => {
          // 이 부분 완성
          // 사과, 바나나, 오렌지 출력(console.log())
          items.forEach(function (item) {
            console.log(item);
          });
        }}
      >
        콘솔로그 출력 버튼!
      </button>
    </div>
  );
};

export default App;
