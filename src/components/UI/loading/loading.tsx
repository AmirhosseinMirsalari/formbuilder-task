import { FC } from "react";

import LoadingIcon from "./icons/loading";
import { ILoading } from "./loading.types";

const Loading: FC<Partial<ILoading>> = ({ height = 40, width = 170 , sx }) => {
  return <LoadingIcon sx={sx} height={height} width={width} color="primary"/>;
};

export default Loading;
