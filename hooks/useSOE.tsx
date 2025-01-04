import { atom, useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useSOEAtom = atomWithStorage<string>("SOE", "2+15");

export const useSOE = () => {
  const [soe, setSoe] = useAtom(useSOEAtom);

  const setSOE = (soe: string) => {
    setSoe(soe);
  };

  return { soe, setSOE };
};
