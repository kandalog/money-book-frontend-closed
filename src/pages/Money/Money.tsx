import axios from "axios";
import { memo, FC, useState, useContext } from "react";
import { Container } from "../../components/atoms/Container";
import { Form } from "../../components/atoms/Form";
import { RadioButton } from "../../components/atoms/RadioButton";
import { Header } from "../../components/molecules/Header/Header";
import { TableData } from "../../components/molecules/TableData";
import { UserContext } from "../../contexts/UserProvider";

import "./Money.scss";

export const Money: FC = memo(() => {
  const { currentUser } = useContext(UserContext);
  const today = new Date();
  console.log(today);

  const [memo, setMemo] = useState("");

  // topArea ラジオ
  const [money, setMoney] = useState("支出");
  const [category, setCategory] = useState("食費");
  const [date, setDate] = useState("2022-02-15");

  // bottomArea ラジオ
  const [recentMoney, setRecentMoney] = useState("支出");
  const [recentCategory, setRecentCategory] = useState("");
  const [month, setMonth] = useState("8月");

  // 家計簿を登録する
  const handleEnroll = async () => {
    const newMoney = {
      userId: currentUser.id | 1,
      amount: 1200,
      date: "2022-09-11",
      category: "食費",
      message: "ステーキ",
      bool: true,
    };
    await axios.post("/money");
  };

  return (
    <>
      <Header />
      <div className="money__inner">
        <p className="money__top__title">家計簿をつける</p>
        <div className="household__enroll__inner">
          <Form fn={() => console.log("")}>
            <Container className="household__top__wrapper">
              <ul className="household__top__list">
                <li className="household__item">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <p className="house__hold__parts">日付</p>
                </li>
                <li className="household__item">
                  <div className="radio-wrap">
                    <RadioButton
                      value="支出"
                      name="money"
                      checked={money === "支出"}
                      onChange={() => setMoney("支出")}
                    />
                    <RadioButton
                      value="収入"
                      name="money"
                      checked={money === "収入"}
                      onChange={() => setMoney("収入")}
                    />
                  </div>
                  <span className="house__hold__parts">収支</span>
                </li>
                <li className="household__item">
                  <div className="radio-wrap">
                    <RadioButton
                      value="食費"
                      name="category"
                      checked={category === "食費"}
                      onChange={() => setCategory("食費")}
                    />
                    <RadioButton
                      value="医療費"
                      name="category"
                      checked={category === "医療費"}
                      onChange={() => setCategory("医療費")}
                    />
                    <RadioButton
                      value="雑費"
                      name="category"
                      checked={category === "雑費"}
                      onChange={() => setCategory("雑費")}
                    />
                  </div>
                  <p className="house__hold__parts">カテゴリー</p>
                </li>
              </ul>
            </Container>
            <Container className="househould__middle__wrapper household__message">
              <input
                type="text"
                placeholder="メモを入力"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Container>
            <Container className="household__bottom__wrapper household__submit">
              <input type="submit" value="登録" onClick={handleEnroll} />
            </Container>
          </Form>
        </div>
        {/* { 後半部} */}
        <div className="household__recent__inner">
          <ul className="resent__top">
            <li className="recent__item">
              <p className="recent__title">最近の支出</p>
            </li>
            <li className="recent__item recent__list">
              <RadioButton
                value="支出"
                name="recentMoney"
                checked={recentMoney === "支出"}
                onChange={() => setRecentMoney("支出")}
              />
              <RadioButton
                value="収入"
                name="recentMoney"
                checked={recentMoney === "収入"}
                onChange={() => setRecentMoney("収入")}
              />
              <RadioButton
                value="全て"
                name="recentMoney"
                checked={recentMoney === "全て"}
                onChange={() => setRecentMoney("全て")}
              />
            </li>
            {/* <li className="recent__item category__list">
              <RadioButton
                value="カテゴリーで絞り込む"
                name="bottom__category"
                checked={true}
                onChange={() => setRecentMoney("全て")}
              />
            </li> */}
          </ul>
          <div className="household__recent__wrapper">
            <button className="month__button">{month}</button>
            <div className="household__table__wrapper">
              <ul className="household__list">
                <TableData
                  date="2021年5月10日"
                  category="食費"
                  type="支出"
                  amount="1500"
                  url="/"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
