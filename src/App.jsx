import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);
  const [inputFruit, setInputFruit] = useState("aaa");

  const { name, age } = user;

  // input을 관리하기 위해서는 2가지!
  // value, onChange

  const addNewItem = () => {
    alert("새로운 아이템 추가하는 함수가 호출됐어요!");

    // input 창에 들어있는 text
    setItems(새로운배열);
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
          // onChange = {}
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
        {items.map(function (item) {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
