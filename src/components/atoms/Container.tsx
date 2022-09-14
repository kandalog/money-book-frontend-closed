import { memo, FC } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};
// Form内部のdivタグなど、どこで分かれているか明確にしたい場合に使用する
export const Container: FC<Props> = memo(({ className, children }) => {
  return <div className={className}>{children}</div>;
});
