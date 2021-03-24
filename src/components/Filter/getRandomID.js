const getId = (list) => {
  const listId = list.map(({ id }) => id);
  let id;
  do {
    const min = 0;
    const max = 1679615;
    const int = Math.floor(Math.random() * (max - min + 1)) + min;
    id = int.toString(36);
  } while (listId.includes(id));

  return id;
};

export default getId;
