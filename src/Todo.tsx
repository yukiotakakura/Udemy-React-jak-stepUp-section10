import { TodoType } from "./types/todo"; // 型定義したファイルをimport

/*
 * propsに対する型定義
 */
// propsに対して型定義。Omitを指定することでTodo.tsファイル「id」以外の要素を抽出する
// Omitと似た機能としてPickがある
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "【完】" : "【未】";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
