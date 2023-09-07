exports.handler = async (event) => {
  return [
    {
      id: Date.now().toString(),
      name: "Kona",
      createdAt: null,
      updatedAt: null,
    },
    {
      id: Date.now().toString(),
      name: "Almendra",
      createdAt: null,
      updatedAt: null,
    },
    {
      id: Date.now().toString(),
      name: "Rex",
      createdAt: null,
      updatedAt: null,
    },
  ];
};
