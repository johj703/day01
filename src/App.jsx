import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({ name: '홍길동', age: 25 });
  const [items, setItems] = useState(['사과', '바나나', '오렌지']);

  // TODO: 구조분해할당(Destructuring) 코드를 여기 아래에 작성하세요.
  const { name, age } = user;
  const [firstItem, secondItem, thirdItem] = items;

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>아이템 목록</h2>
      <ul>
        <li>{firstItem}</li>
        <li>{secondItem}</li>
        <li>{thirdItem}</li>
      </ul>
    </div>
  );
}

export default App
