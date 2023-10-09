import { FC } from "react";

export type MeshComponent = {
  type: FC<any>;
  props: Record<string, any>;
};
