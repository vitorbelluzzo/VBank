import { sum, multiply } from "./sum";

describe('sum and multiply', () => {
  it('deve somar um numero com o outro', () => {
    expect(sum(1, 3)).toBe(4);
  });

  it('deve multiplicar o numero informado', () => {
    expect(multiply(2)).toBe(4)
  });
  
});

