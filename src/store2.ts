import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

type Store2State = {
  message: string;
};
type Store2Actions = {
  updateMessage: () => void;
};
export type Store2 = Store2State & Store2Actions;

export const useStore2 = create<Store2>()(
  devtools(
    subscribeWithSelector((set) => ({
      message: "No yet set",
      updateMessage: () => {
        set(() => ({ message: `Updated at ${new Date().toString()}` }), false, {
          type: "updateMessage",
        });
      },
    })),
    {
      name: "Tester",
      store: "Store2",
    }
  )
);
