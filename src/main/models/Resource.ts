import { ResourceType } from '../enums/ResourceType';

export class Resource {
  public type: ResourceType;
  public amount: number;

  constructor(type: ResourceType, amount: number) {
    this.type = type;
    this.amount = amount;
  }
}
