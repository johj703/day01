import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  const { name, age } = user;

  const addNewItem = () => {
    alert("새로운 아이템 추가하는 함수가 호출됐어요!");
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>사용자의 아이템 목록</h2>

      <form onSubmit={addNewItem}>
        <input />
        <button>추가</button>
      </form>
    </div>
  );
};

export default App;
