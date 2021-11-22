import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo"; // 型定義したファイルをimport
import { Text } from "./Text"; //コンポーネント自体の型定義
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "じゃけぇ",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  // TSによるstateの型定義
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  // ボタンがクリックされた場合
  const onClickFetchData = () => {
    axios
      // TSによるaxiosの型定義
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>
        JSONPlaceholderからデータを取得
      </button>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
