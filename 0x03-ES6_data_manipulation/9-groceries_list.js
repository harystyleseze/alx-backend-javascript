const groceriesList = () => {
  const res = new Map();
  const objectos = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  for (const [key, value] of Object.entries(objectos)) {
    res.set(key, value);
  }
  
  return res;
};

export default groceriesList;
