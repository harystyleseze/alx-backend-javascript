export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Get the current count, defaulting to 0 if not found
  let called = weakMap.get(endpoint) || 0;

  // Increment the count
  called += 1;

  // Update the count in the weakMap
  weakMap.set(endpoint, called);

  // Throw an error if the count reaches 5
  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }
}
