// @flow
export const range = (from: number, to: number): number[] => {
  const result: number[] = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};
