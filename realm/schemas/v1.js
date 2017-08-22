const Dog = {
  name: "dog",
  primaryKey: "id",
  properties: {
    id: "string",
    name: "string",
  },
};

export default {
  schema: [Dog],
  schemaVersion: 1,
};
