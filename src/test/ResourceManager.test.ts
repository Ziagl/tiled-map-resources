import { Resource, ResourceManager, ResourceTile, ResourceType } from "../main";

const exampleCoordinate = { q: 0, r: 0, s: 0 };
const exampleResource = new Resource(ResourceType.FOOD,5);

test('useResourceStore', () => {
    const resourceManager = new ResourceManager();
    const resourceTile = new ResourceTile();
    resourceTile.addResource(exampleResource);
    resourceManager.addResourceTile(exampleCoordinate, resourceTile);
    const receivedResourceTile = resourceManager.getResources(exampleCoordinate);
    expect(receivedResourceTile).toBeDefined();
});