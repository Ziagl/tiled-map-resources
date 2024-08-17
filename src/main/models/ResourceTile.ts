import { Resource } from './Resource';

export class ResourceTile {
  private resource: Resource[];
  //private specialResource: ResourceType;

  constructor() {
    this.resource = [];
  }

  // adds a resource to this tile or updates amount of existing resource type
  public addResource(resource: Resource): void {
    const existingResource = this.resource.find((r) => r.type === resource.type);
    if (existingResource === undefined) {
      this.resource.push(resource);
    } else {
      existingResource.amount += resource.amount;
    }
  }

  // get all resources of this tile
  public getResources(): Resource[] {
    return this.resource;
  }
}
