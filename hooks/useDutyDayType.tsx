import { atom, useAtom } from "jotai";

import { atomWithStorage } from "jotai/utils";

const useSOEAtom = atomWithStorage<string>("DUTY_DAY", "Normal");

export const useDutyDayType = () => {
  const [dutyDay, setDuty] = useAtom(useSOEAtom);

  const setDutyDay = (dutyDay: string) => {
    setDuty(dutyDay);
  };

  return { dutyDay, setDutyDay };
};
