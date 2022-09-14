import { memo, FC } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: FC = memo(() => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <Link to="/">MONEY-BOOK</Link>
        </h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <Link to="/">トップ</Link>
            </li>
            <li className="header__list-item">
              <Link to="/profile">プロフィール</Link>
            </li>
            <li className="header__list-item">
              <Link to="/login">ログイン</Link>
            </li>
            <li className="header__list-item">
              <Link to="/contact">お問い合わせ</Link>
            </li>
            <li className="header__list-item">
              <Link to="/">ログアウト</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
