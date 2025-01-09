import { useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useSOEAtom = atomWithStorage<[number, number]>("SOE", [2, 15]);

export const useSOE = () => {
  const [soe, setSOE] = useAtom(useSOEAtom);

  return { soe, setSOE };
};
