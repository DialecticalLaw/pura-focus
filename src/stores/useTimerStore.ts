import { create } from 'zustand';

export type ModeType = 'focus' | 'shortBreak' | 'longBreak';

interface TimerStore {
  time: number;
  mode: ModeType;
  isRunning: boolean;
  decreaseTime: () => void;
  resetTime: () => void;
  setIsRunning: (isRunning: boolean) => void;
  setMode: (mode: ModeType) => void;
}

enum ModeTimes {
  focus = 25 * 60,
  shortBreak = 5 * 60,
  longBreak = 10 * 60,
}

export const useTimerStore = create<TimerStore>((set) => ({
  time: ModeTimes.focus,
  isRunning: false,
  mode: 'focus',
  decreaseTime: () => set((state) => ({ time: state.time - 1 })),
  resetTime: () =>
    set(({ mode }) => {
      switch (mode) {
        case 'focus':
          return { time: ModeTimes.focus, isRunning: false };
        case 'shortBreak':
          return { time: ModeTimes.shortBreak, isRunning: false };
        case 'longBreak':
          return { time: ModeTimes.longBreak, isRunning: false };
        default:
          throw new Error(`Unknown mode: ${mode}`);
      }
    }),
  setIsRunning: (isRunning) => set({ isRunning }),
  setMode: (mode) => set({ mode }),
}));
