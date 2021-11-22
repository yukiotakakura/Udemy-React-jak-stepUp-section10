/*
 * TSによる型定義を効率的に管理するために別ファイルに定義する
 */
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
