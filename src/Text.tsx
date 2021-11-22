import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

/*
 * コンポーネントに対する型定義
 * 方法2つ目
 */
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
