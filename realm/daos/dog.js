import current from "../current";

export const save = dog => {
  const realm = current();
  realm.write(() => {
    saved = realm.create("dog", dog, true);
  });
  return { ...saved };
}

export const getById = id => {
  const results = current().objects("dog").filtered(`id = "${id}"`);
  const resultArr = Object.values(results);
  return resultArr.length === 0 ? null : resultArr[0];
}