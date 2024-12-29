import { getMyDate } from "@/utils/SetGetData";
import { useEffect, useState } from "react";

export const useZulu = (): Date | undefined => {
  const [zulu, setZulu] = useState<Date>();
  useEffect(() => {
    getMyDate("zulu").then((v) => setZulu(new Date(v)));
  });
  return zulu;
};
