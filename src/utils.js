export const add = (a, b) => Number(a) + Number(b);

export const safeDivide = (a, b) => (b === 0 ? null : Number(a) / Number(b));

export const roundTo = (num, decimals) => {
  const factor = Math.pow(10, decimals);
  // 加 EPSILON 抵銷 1.005 類型的浮點誤差
  return Math.round((num + Number.EPSILON) * factor) / factor;
};

export const parsePercent = (string) => Number(string.replace("%", "")) / 100;
