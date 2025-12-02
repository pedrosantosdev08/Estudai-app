// src/utils/formatTime.ts
export const formatarTempo = (minutosParam?: number): string => {
  // garante número inteiro >= 0
  const minutosTotal = Math.max(0, Math.round(minutosParam ?? 0));

  const horas = Math.floor(minutosTotal / 60);
  const minutos = minutosTotal % 60;

  // minutos sempre com 2 dígitos (00, 03, 15, ...)
  const minutosStr = minutos.toString().padStart(2, "0");

  return `${horas}h ${minutosStr}min`;
};
export default formatarTempo;