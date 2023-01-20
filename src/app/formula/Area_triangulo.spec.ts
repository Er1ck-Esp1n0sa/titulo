import { formulaArea } from "./Area_triangulo";

describe('formulaArea', () => {
  it('shoult return formulaArea', () => {
    const resutl = formulaArea(5,3);
    expect(resutl).toEqual(7.5)
  })
});

describe('formulaArea', () => {
    it('shoult return formulaArea', () => {
      const resutl = formulaArea(10,7);
      expect(resutl).toEqual(35)
    })
  });

describe('formulaArea', () => {
  it('shoult return formulaArea', () => {
    const resutl = formulaArea(7.5,5);
    expect(resutl).toEqual(18.75)
  })
});

describe('formulaArea', () => {
    it('shoult return formulaArea', () => {
      const resutl = formulaArea(15.6,6.6);
      expect(resutl).toEqual(51.48)
    })
  });

describe('formulaArea', () => {
  it('shoult return formulaArea', () => {
    const resutl = formulaArea(10,4);
    expect(resutl).toEqual(20)
  })
});

