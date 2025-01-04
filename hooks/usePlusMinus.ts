import { getMyDate } from "@/utils/SetGetData";
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const usePlusMinusAtom = atomWithStorage<boolean>("plusOrMinus", true);

export const usePlusMinus = () => {
  const [plusMinus, setPMinus] = useAtom(usePlusMinusAtom);

  const setPlusMinus = (plusMinus: boolean) => {
    setPMinus(plusMinus);
  };

  return { plusMinus, setPlusMinus };
};
