import axios from "axios";
import { memo, FC, useState, useContext } from "react";
import { Authbox } from "../../components/atoms/Authbox/Authbox";
import { AuthInput } from "../../components/atoms/AuthInput";
import { Header } from "../../components/molecules/Header/Header";
import { UserContext } from "../../contexts/UserProvider";

import "./Login.scss";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const targetUser = {
      email: email,
      password: password,
    };

    try {
      const user = await axios.post("/auth/login", targetUser);
      setCurrentUser(user.data);
      console.log(user.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Authbox>
        <p className="auth__text">ログイン</p>
        <form onSubmit={handleSubmit}>
          <ul className="form__list">
            <AuthInput
              title="メールアドレス"
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInput
              title="パスワード"
              type="password"
              name="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ul>
          <button className="form__submit" type="submit">
            登録
          </button>
        </form>
      </Authbox>
    </>
  );
});
