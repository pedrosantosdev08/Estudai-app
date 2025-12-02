// service/PomodoroService.ts

export const POMODORO_TIME = 25 * 60;
export const SHORT_BREAK_TIME = 5 * 60;
export const LONG_BREAK_TIME = 15 * 60;

export type Mode = "Pomodoro" | "Pausa Curta" | "Pausa Longa";

export const getInitialTime = (mode: Mode) => {
  switch (mode) {
    case "Pomodoro":
      return POMODORO_TIME;
    case "Pausa Curta":
      return SHORT_BREAK_TIME;
    case "Pausa Longa":
      return LONG_BREAK_TIME;
  }
};

export const formatTime = (totalSeconds: number) => {
  const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const sec = String(totalSeconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
};
