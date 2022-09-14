import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Authbox: FC<Props> = memo(({ children }) => {
  return (
    <div className="auth__body">
      <div className="auth__container">{children}</div>
    </div>
  );
});
