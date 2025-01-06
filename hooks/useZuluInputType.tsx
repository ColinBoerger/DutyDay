import { useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useSOEAtom = atomWithStorage<string>("ZULU_INPUT", "Zulu");

export const useZuluInputType = () => {
  const [zuluInput, setZuluIn] = useAtom(useSOEAtom);

  const setInputZulu = (zuluInput: string) => {
    setZuluIn(zuluInput);
  };

  return { zuluInput, setInputZulu };
};
