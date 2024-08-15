import { Resource, ResourceManager, ResourceTile, ResourceType } from '../main';

const exampleCoordinate = { q: 0, r: 0, s: 0 };
const foodResource = new Resource(ResourceType.FOOD, 1);
const productionResource = new Resource(ResourceType.PRODUCTION, 1);

test('useResourceStore', () => {
  const resourceManager = new ResourceManager();
  const resourceTile = new ResourceTile();
  resourceTile.addResource(foodResource);
  resourceManager.addResourceTile(exampleCoordinate, resourceTile);
  const receivedResourceTile = resourceManager.getResources(exampleCoordinate);
  expect(receivedResourceTile).toBeDefined();
});
test('addResource', () => {
  const resourceTile = new ResourceTile();
  resourceTile.addResource(foodResource);
  resourceTile.addResource(productionResource);
  resourceTile.addResource(foodResource);
  const resources = resourceTile.getResources();
  expect(resources).toHaveLength(2);
  expect(resources[0]?.amount).toBe(2);
  expect(resources[1]?.amount).toBe(1);
});
