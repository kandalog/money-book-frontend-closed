import { memo, FC } from "react";
import { Header } from "../../components/molecules/Header/Header";

import "./Home.scss";

export const Home: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="home__body">
        <div className="home__message-box">
          <p className="message__title">MONEY-BOOK</p>
          <p className="message__subtitle">毎日を記録しよう</p>
        </div>
      </div>
    </>
  );
});
