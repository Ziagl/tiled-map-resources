import { CubeCoordinates } from 'honeycomb-grid';
import { ResourceTile } from "./models/ResourceTile";
import { Resource } from './models/Resource';

export class ResourceManager {
    private _resourceStore = new Map<string, ResourceTile>();

    constructor() {
        this._resourceStore = new Map<string, ResourceTile>();
    }

    // adds a resource tile to store
    public addResourceTile(coorinate: CubeCoordinates, resourceTile: ResourceTile): void {
        this._resourceStore.set(coorinate.toString(), resourceTile);
    }

    // get resources
    public getResources(coordinate: CubeCoordinates): Resource[] | undefined{
        return this._resourceStore.get(coordinate.toString())?.getResources();
    }
}