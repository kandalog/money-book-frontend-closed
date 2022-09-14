import { memo, FC } from "react";

type Props = {
  children: React.ReactNode;
  fn?: () => void;
};

export const Form: FC<Props> = memo(({ children, fn }) => {
  return <form onSubmit={fn}>{children}</form>;
});
