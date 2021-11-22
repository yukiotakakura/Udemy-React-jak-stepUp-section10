import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

/*
 * ユーザプロフィールコンポーネントを定義
 */
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/*  ？をつけることでnullだった場合でもエラーにならない */}
      <dd>{user.hobbies?.join("/")}</dd>
    </dl>
  );
};
