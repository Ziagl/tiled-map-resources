import { CubeCoordinates } from 'honeycomb-grid';
import { ResourceTile } from './models/ResourceTile';
import { Resource } from './models/Resource';
import { Utils } from '@ziagl/tiled-map-utils';

export class ResourceManager {
  private _resourceStore = new Map<string, ResourceTile>();

  constructor() {
    this._resourceStore = new Map<string, ResourceTile>();
  }

  // adds a resource tile to store
  public addResourceTile(coordinate: CubeCoordinates, resourceTile: ResourceTile): void {
    this._resourceStore.set(Utils.coordinateToKey(coordinate), resourceTile);
  }

  // get resources
  public getResources(coordinate: CubeCoordinates): Resource[] | undefined {
    return this._resourceStore.get(Utils.coordinateToKey(coordinate))?.getResources();
  }
}
