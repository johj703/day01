import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  return <div>App</div>;
};

export default App;
