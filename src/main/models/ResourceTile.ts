import { Resource } from "./Resource";

export class ResourceTile {
    private resource: Resource[];
    //private specialResource: ResourceType;

    constructor() {
        this.resource = [];
    }

    public addResource(resource: Resource): void {
        this.resource.push(resource);
    }

    public getResources(): Resource[] {
        return this.resource;
    }
}