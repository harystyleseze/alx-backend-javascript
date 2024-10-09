const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Input must be a Map');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
};

export default updateUniqueItems;
