import axios from "axios";
import { memo, FC, useContext, useState } from "react";
import { Authbox } from "../../components/atoms/Authbox/Authbox";
import { Header } from "../../components/molecules/Header/Header";
import { UserContext } from "../../contexts/UserProvider";

export const Profile: FC = memo(() => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editedUser = {
      // userId: currentUser.id,
      name: name,
      email: email,
      password: password,
    };
    // console.log(currentUser.id);

    try {
      const user = await axios.put("/auth", editedUser);
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
        <p className="auth__text">プロフィール</p>
        <form onSubmit={handleSubmit}>
          <ul className="form__list">
            <li className="form__item">
              <p className="form__title">名前</p>
              <input
                type="text"
                name="name"
                placeholder="お名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li className="form__item">
              <p className="form__title">メールアドレス</p>
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="form__item">
              <p className="form__title">パスワード</p>
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
          </ul>
          <button className="form__submit" type="submit">
            更新
          </button>
        </form>
      </Authbox>
    </>
  );
});
