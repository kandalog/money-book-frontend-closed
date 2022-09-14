import { memo, FC } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

type Object = {
  style?: string;
  text: string;
  path: string;
};

export const HeaderNav: FC<Object> = memo((props) => {
  const { text, path } = props;
  return (
    <li className="header__item">
      <Link to={path}>{text}</Link>
    </li>
  );
});
