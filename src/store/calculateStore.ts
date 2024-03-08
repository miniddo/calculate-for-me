import { makeAutoObservable } from 'mobx';

export interface CalculateInfo {
  name: string;
  price: number;
  proportional: number;
}

class CalculateStore {
  private _count: number;
  private _price: number;
  private _calculateInfo: CalculateInfo[];

  constructor() {
    this._count = 0;
    this._price = 0;
    this._calculateInfo = [];

    makeAutoObservable(this);
  }

  get count() {
    return this._count;
  }

  setCount(value: number) {
    this._count = value;
  }

  get price() {
    return this._price;
  }

  setPrice(value: number) {
    this._price = value;
  }

  get calculateInfo() {
    return this._calculateInfo;
  }

  setCalculateInfo(value: CalculateInfo[]) {
    this._calculateInfo = value;
  }
}

export default CalculateStore;
