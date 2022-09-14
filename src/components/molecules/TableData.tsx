import { memo, FC } from "react";

type Props = {
  date: string;
  category: string;
  type: string;
  amount: string;
  url: string;
};

export const TableData: FC<Props> = memo((Props) => {
  const handleOnclick = () => {
    console.log(url);
  };
  const { date, category, type, amount, url = "/" } = Props;
  return (
    <li className="house__holdt__item">
      <div className="household__left">
        <p className="house__hold__date">{date}</p>
        <p className="household__category">{category}</p>
      </div>
      <div className="household__right">
        <p className="household__type">{type}</p>
        <p className="household__amount">¥{amount}</p>
        <button className="household__delete" onClick={handleOnclick}>
          削除
        </button>
      </div>
    </li>
  );
});
