import { getMyDate } from "@/utils/SetGetData";
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useZuluAtom = atomWithStorage<string>("zulu", "1899-12-30T23:00:00.000Z");

export const useZulu = () => {
  const [zuluString, setZuluString] = useAtom(useZuluAtom);
  const zulu = new Date(zuluString);

  console.log("changing in hook", zulu.getHours());

  const setZulu = (newZulu: Date) => {
    setZuluString(newZulu.toISOString());
  };

  return { zulu, setZulu };
};
