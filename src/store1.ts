import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

type Store1State = {
  counter: number;
};
type Store1Actions = {
  increment: () => void;
  decrement: () => void;
};
export type Store1 = Store1State & Store1Actions;

export const useStore1 = create<Store1>()(
  devtools(
    subscribeWithSelector((set) => ({
      counter: 0,
      increment: () => {
        set((state) => ({ counter: state.counter + 1 }), false, {
          type: "increment",
        });
      },
      decrement: () => {
        set((state) => ({ counter: state.counter - 1 }), false, {
          type: "decrement",
        });
      },
    })),

    {
      name: "Tester",
      store: "Store1",
    }
  )
);
