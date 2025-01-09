import { useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useSOEAtom = atomWithStorage<string>("GT", "16+00");

export const useGroundTime = () => {
  const [groundTime, setGT] = useAtom(useSOEAtom);

  const setGroundTime = (gt: string) => {
    setGT(gt);
  };

  return { groundTime, setGroundTime };
};
