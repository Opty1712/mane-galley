import { FC } from "react";
import { typogrpah } from "../utils";

export const Typograph: FC<{ children: string }> = ({ children }) => (
  <>{typogrpah.execute(children)}</>
);
